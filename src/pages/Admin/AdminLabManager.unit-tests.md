# AdminLabManager Unit Tests Documentation

## Overview
This document describes the unit tests for the AdminLabManager component. These tests verify the component's functionality including module list display, creation, editing, deletion, and error handling.

## Test Framework
- **Framework**: Vitest (when configured)
- **Testing Library**: React Testing Library
- **Mocking**: vi.mock for axios client and react-router-dom

## Test File Location
`frontend/src/pages/Admin/AdminLabManager.test.jsx`

## Test Coverage

### 1. Module List Rendering
**Test**: `should render module list after fetching data`

**Purpose**: Verify that modules are fetched from the API and displayed correctly

**Setup**:
- Mock API response with sample modules
- Render component

**Assertions**:
- Loading indicator appears initially
- Module titles are displayed after loading
- Module metadata (class range, subtitle) is shown

**Requirements Validated**: 1.2, 13.1, 13.2

---

### 2. Error Handling - API Failure
**Test**: `should display error message when API fails`

**Purpose**: Verify that API errors are handled gracefully

**Setup**:
- Mock API to reject with error
- Render component

**Assertions**:
- Error message is displayed
- Error message is user-friendly

**Requirements Validated**: 10.5, 10.6

---

### 3. Empty State Display
**Test**: `should show empty state when no modules exist`

**Purpose**: Verify that empty state is displayed when no modules are available

**Setup**:
- Mock API to return empty array
- Render component

**Assertions**:
- Empty state message is displayed
- Message encourages creating first module

**Requirements Validated**: 13.2

---

### 4. Module Expansion/Collapse
**Test**: `should expand and collapse module to show components`

**Purpose**: Verify that modules can be expanded to show components

**Setup**:
- Mock API with modules containing components
- Render component
- Click expand button

**Assertions**:
- Components are not visible initially
- Components become visible after clicking expand
- Components are hidden after clicking collapse
- Button text changes between "Expand" and "Collapse"

**Requirements Validated**: 13.2

---

### 5. Create Form Display
**Test**: `should open create form when Create Module button is clicked`

**Purpose**: Verify that the create form opens correctly

**Setup**:
- Render component
- Click "Create Module" button

**Assertions**:
- Form is displayed
- Form title is "Create New Module"
- All form fields are present
- Submit button says "Create Module"

**Requirements Validated**: 2.1, 13.2

---

### 6. Form Validation
**Test**: `should validate required fields in create form`

**Purpose**: Verify that required field validation works

**Setup**:
- Open create form
- Try to submit without filling required fields

**Assertions**:
- Form does not submit
- API is not called
- HTML5 validation prevents submission

**Requirements Validated**: 2.3, 2.7, 8.1

---

### 7. Module Creation - Success
**Test**: `should create a new module successfully`

**Purpose**: Verify that a new module can be created

**Setup**:
- Mock successful API response
- Open create form
- Fill in form data
- Submit form

**Assertions**:
- API is called with correct data
- Form closes after success
- Module list is refreshed

**Requirements Validated**: 2.2, 2.7, 10.6, 13.2, 13.4

---

### 8. Edit Form Display
**Test**: `should open edit form with pre-filled data`

**Purpose**: Verify that the edit form opens with existing module data

**Setup**:
- Render component with modules
- Click "Edit" button on a module

**Assertions**:
- Form is displayed
- Form title is "Edit Module"
- All fields are pre-filled with module data
- Submit button says "Update Module"

**Requirements Validated**: 3.1, 13.2

---

### 9. Module Deletion - Confirmation
**Test**: `should delete module with confirmation`

**Purpose**: Verify that module deletion requires confirmation

**Setup**:
- Mock window.confirm to return true
- Mock successful delete API response
- Click "Delete" button

**Assertions**:
- Confirmation dialog is shown
- Dialog message mentions component deletion
- API is called after confirmation
- Module list is refreshed

**Requirements Validated**: 4.2, 4.4, 10.6, 13.4

---

### 10. Module Deletion - Cancel
**Test**: `should not delete module if confirmation is cancelled`

**Purpose**: Verify that deletion can be cancelled

**Setup**:
- Mock window.confirm to return false
- Click "Delete" button

**Assertions**:
- Confirmation dialog is shown
- API is NOT called
- Module remains in list

**Requirements Validated**: 4.4

---

### 11. Navigation
**Test**: `should navigate to dashboard when Dashboard button is clicked`

**Purpose**: Verify that navigation works correctly

**Setup**:
- Mock useNavigate
- Click "Dashboard" button

**Assertions**:
- navigate function is called with "/admin/dashboard"

**Requirements Validated**: 13.3

---

### 12. Error Handling - Create Module
**Test**: `should handle API error when creating module`

**Purpose**: Verify that API errors during creation are displayed

**Setup**:
- Mock API to reject with error message
- Open create form
- Fill in data
- Submit form

**Assertions**:
- Error message is displayed in form
- Form remains open
- Error message matches API response

**Requirements Validated**: 2.7, 10.6

---

## Mock Data

### Sample Module Data
```javascript
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
```

## Running Tests

### Prerequisites
1. Install testing dependencies:
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @vitest/ui jsdom
```

2. Create `vitest.config.js`:
```javascript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
});
```

3. Create `src/test/setup.js`:
```javascript
import '@testing-library/jest-dom';
```

4. Update `package.json`:
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Test Maintenance

### When to Update Tests
- When adding new features to AdminLabManager
- When changing component behavior
- When fixing bugs
- When updating API endpoints

### Best Practices
1. Keep tests focused on single functionality
2. Use descriptive test names
3. Mock external dependencies
4. Test user interactions, not implementation details
5. Maintain test data consistency
6. Update tests when requirements change

## Requirements Traceability

| Requirement | Test Cases |
|-------------|------------|
| 1.2 | Module List Rendering |
| 2.1 | Create Form Display |
| 2.2 | Module Creation - Success |
| 2.3 | Form Validation |
| 2.7 | Form Validation, Module Creation - Success, Error Handling |
| 3.1 | Edit Form Display |
| 4.2 | Module Deletion - Confirmation |
| 4.4 | Module Deletion - Confirmation, Cancel |
| 8.1 | Form Validation |
| 10.5 | Error Handling - API Failure |
| 10.6 | Error Handling - API Failure, Module Creation - Success, Deletion |
| 13.1 | Module List Rendering |
| 13.2 | Module List Rendering, Empty State, Expansion, Create Form, Edit Form |
| 13.3 | Navigation |
| 13.4 | Module Creation - Success, Module Deletion |

## Known Limitations
- Tests require vitest to be configured in the project
- Some tests rely on HTML5 form validation which may behave differently in test environment
- Window.confirm mocking may not work in all test environments
- Tests do not cover component management (will be added in future tasks)

## Future Test Coverage
- Component creation within modules
- Component editing
- Component deletion
- Component reordering
- Module reordering (drag and drop)
- Integration tests with real API
- E2E tests with Playwright/Cypress
