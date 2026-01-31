import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicePage from "./pages/Service";
import RoboticsPage from "./pages/Robotics";
import WorkshopPage from "./pages/Workshop";
import TeamPage from "./pages/Team";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Gallery from "./pages/Gallery";
import AgencyPage from "./pages/Agency";
import LabPage from "./pages/Lab";
import SocialFloat from "./components/SocialFloat";


// Auth
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminSignup from "./pages/Admin/AdminSignup";

// Admin
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TeamManager from "./pages/Admin/TeamManager";
import AdminTeamList from "./pages/Admin/AdminTeamList";
import ContentEditor from "./pages/ContentEditor";
import UploadManager from "./pages/Admin/UploadManager";
import AdminGallery from "./pages/Admin/AdminGallery";
import AdminFeedback from "./pages/Admin/AdminFeedback";

// Middleware
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      {/* 👇 Ye line MOST IMPORTANT hai */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/robotics" element={<RoboticsPage />} />
        <Route path="/workshops" element={<WorkshopPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/agency" element={<AgencyPage />} />
        <Route path="/lab" element={<LabPage />} />

        {/* ================= AUTH ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        {/* ================= PROTECTED ADMIN ================= */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/team"
          element={
            <ProtectedRoute>
              <TeamManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/team-list"
          element={
            <ProtectedRoute>
              <AdminTeamList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/content"
          element={
            <ProtectedRoute>
              <ContentEditor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/uploads"
          element={
            <ProtectedRoute>
              <UploadManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <AdminGallery />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/feedback"
          element={
            <ProtectedRoute>
              <AdminFeedback />
            </ProtectedRoute>
          }
        />
      </Routes>

      <SocialFloat />


      <Footer />
    </BrowserRouter>
  );
}
