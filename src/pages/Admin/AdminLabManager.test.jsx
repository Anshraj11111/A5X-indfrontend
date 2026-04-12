import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AdminLabManager from "./AdminLabManager";
import client from "../../utils/axiosClient";

// Mock the axios client
vi.mock("../../utils/axiosClient");

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("AdminLabManager", () => {
  const mockModules = [
    {
      _id: "module1",
      title: "MODULE A: FOUNDATION ELECTRONICS",
      subtitle: "Basic electronics components",
      emoji: "🟢",
      classRange: "Class 5–6",
      order: 1,
      components: [
        {
          _id: "comp1",
          name: "Breadboard",
          quantity: "15",
          price: "₹150",
          order: 1,
        },
        {
          _id: "comp2",
          name: "LED (Mixed colors)",
          quantity: "100",
          price: "₹200",
          order: 2,
        },
      ],
    },
    {
      _id: "module2",
      title: "MODULE B: ROBOTICS",
      subtitle: "Robotics components",
      emoji: "🤖",
      classRange: "Class 7–8",
      order: 2,
      components: [],
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render module list after fetching data", async () => {
    client.get.mockResolvedValueOnce({ data: mockModules });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    // Should show loading initially
    expect(screen.getByText(/Loading modules/i)).toBeInTheDocument();

    // Wait for modules to load
    await waitFor(() => {
      expect(screen.getByText(/MODULE A: FOUNDATION ELECTRONICS/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/MODULE B: ROBOTICS/i)).toBeInTheDocument();
    expect(screen.getByText(/Class 5–6/i)).toBeInTheDocument();
    expect(screen.getByText(/Class 7–8/i)).toBeInTheDocument();
  });

  it("should display error message when API fails", async () => {
    client.get.mockRejectedValueOnce(new Error("Network error"));

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Failed to load lab modules/i)).toBeInTheDocument();
    });
  });

  it("should show empty state when no modules exist", async () => {
    client.get.mockResolvedValueOnce({ data: [] });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/No modules found/i)).toBeInTheDocument();
    });
  });

  it("should expand and collapse module to show components", async () => {
    client.get.mockResolvedValueOnce({ data: mockModules });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/MODULE A: FOUNDATION ELECTRONICS/i)).toBeInTheDocument();
    });

    // Components should not be visible initially
    expect(screen.queryByText("Breadboard")).not.toBeInTheDocument();

    // Click expand button
    const expandButtons = screen.getAllByText("Expand");
    fireEvent.click(expandButtons[0]);

    // Components should now be visible
    await waitFor(() => {
      expect(screen.getByText("Breadboard")).toBeInTheDocument();
      expect(screen.getByText("LED (Mixed colors)")).toBeInTheDocument();
    });

    // Click collapse button
    const collapseButton = screen.getByText("Collapse");
    fireEvent.click(collapseButton);

    // Components should be hidden again
    await waitFor(() => {
      expect(screen.queryByText("Breadboard")).not.toBeInTheDocument();
    });
  });

  it("should open create form when Create Module button is clicked", async () => {
    client.get.mockResolvedValueOnce({ data: mockModules });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/MODULE A: FOUNDATION ELECTRONICS/i)).toBeInTheDocument();
    });

    // Click Create Module button
    const createButton = screen.getByText("+ Create Module");
    fireEvent.click(createButton);

    // Form should be visible
    expect(screen.getByText("Create New Module")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/MODULE A: FOUNDATION ELECTRONICS/i)).toBeInTheDocument();
  });

  it("should validate required fields in create form", async () => {
    client.get.mockResolvedValueOnce({ data: [] });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("+ Create Module")).toBeInTheDocument();
    });

    // Open create form
    fireEvent.click(screen.getByText("+ Create Module"));

    // Try to submit without filling required fields
    const submitButton = screen.getByText("Create Module");
    fireEvent.click(submitButton);

    // Form should not submit (HTML5 validation will prevent it)
    expect(client.post).not.toHaveBeenCalled();
  });

  it("should create a new module successfully", async () => {
    client.get.mockResolvedValueOnce({ data: [] });
    client.post.mockResolvedValueOnce({ data: { _id: "new-module" } });
    client.get.mockResolvedValueOnce({ data: mockModules });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("+ Create Module")).toBeInTheDocument();
    });

    // Open create form
    fireEvent.click(screen.getByText("+ Create Module"));

    // Fill in the form
    const titleInput = screen.getByPlaceholderText(/MODULE A: FOUNDATION ELECTRONICS/i);
    fireEvent.change(titleInput, { target: { value: "New Module" } });

    // Submit form
    const submitButton = screen.getByText("Create Module");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(client.post).toHaveBeenCalledWith("/lab/modules", {
        title: "New Module",
        subtitle: "",
        emoji: "🔹",
        classRange: "",
      });
    });
  });

  it("should open edit form with pre-filled data", async () => {
    client.get.mockResolvedValueOnce({ data: mockModules });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/MODULE A: FOUNDATION ELECTRONICS/i)).toBeInTheDocument();
    });

    // Click Edit button
    const editButtons = screen.getAllByText("Edit");
    fireEvent.click(editButtons[0]);

    // Form should be visible with pre-filled data
    expect(screen.getByText("Edit Module")).toBeInTheDocument();
    const titleInput = screen.getByDisplayValue("MODULE A: FOUNDATION ELECTRONICS");
    expect(titleInput).toBeInTheDocument();
  });

  it("should delete module with confirmation", async () => {
    client.get.mockResolvedValueOnce({ data: mockModules });
    client.delete.mockResolvedValueOnce({ data: { success: true } });
    client.get.mockResolvedValueOnce({ data: [mockModules[1]] });

    // Mock window.confirm
    window.confirm = vi.fn(() => true);

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/MODULE A: FOUNDATION ELECTRONICS/i)).toBeInTheDocument();
    });

    // Click Delete button
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    // Confirm dialog should be shown
    expect(window.confirm).toHaveBeenCalledWith(
      expect.stringContaining("Are you sure you want to delete this module")
    );

    await waitFor(() => {
      expect(client.delete).toHaveBeenCalledWith("/lab/modules/module1");
    });
  });

  it("should not delete module if confirmation is cancelled", async () => {
    client.get.mockResolvedValueOnce({ data: mockModules });

    // Mock window.confirm to return false
    window.confirm = vi.fn(() => false);

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/MODULE A: FOUNDATION ELECTRONICS/i)).toBeInTheDocument();
    });

    // Click Delete button
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    // Delete should not be called
    expect(client.delete).not.toHaveBeenCalled();
  });

  it("should navigate to dashboard when Dashboard button is clicked", async () => {
    client.get.mockResolvedValueOnce({ data: mockModules });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
    });

    // Click Dashboard button
    fireEvent.click(screen.getByText("Dashboard"));

    expect(mockNavigate).toHaveBeenCalledWith("/admin/dashboard");
  });

  it("should handle API error when creating module", async () => {
    client.get.mockResolvedValueOnce({ data: [] });
    client.post.mockRejectedValueOnce({
      response: { data: { message: "Title is required" } },
    });

    render(
      <BrowserRouter>
        <AdminLabManager />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("+ Create Module")).toBeInTheDocument();
    });

    // Open create form
    fireEvent.click(screen.getByText("+ Create Module"));

    // Fill in the form
    const titleInput = screen.getByPlaceholderText(/MODULE A: FOUNDATION ELECTRONICS/i);
    fireEvent.change(titleInput, { target: { value: "Test" } });

    // Submit form
    const submitButton = screen.getByText("Create Module");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Title is required")).toBeInTheDocument();
    });
  });
});
