# AdminLabManager Manual Test Cases

## Test Setup
1. Ensure backend server is running
2. Ensure you are logged in as an admin user
3. Navigate to `/admin/lab`

## Test Case 1: Module List Display
**Objective**: Verify that modules are fetched and displayed correctly

**Steps**:
1. Navigate to `/admin/lab`
2. Wait for modules to load

**Expected Results**:
- Loading spinner should appear initially
- Modules should be displayed in a list
- Each module should show: emoji, title, class range, and subtitle
- Expand/Edit/Delete buttons should be visible for each module

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 2: Module Creation Form Display
**Objective**: Verify that the create form opens and displays correctly

**Steps**:
1. Click the "+ Create Module" button
2. Observe the form that appears

**Expected Results**:
- Form should appear with title "Create New Module"
- Form should have fields: Title (required), Subtitle, Emoji, Class Range
- Submit button should say "Create Module"
- Cancel button should be visible

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 3: Module Creation - Success
**Objective**: Verify that a new module can be created successfully

**Steps**:
1. Click "+ Create Module"
2. Fill in the form:
   - Title: "TEST MODULE"
   - Subtitle: "Test subtitle"
   - Emoji: "🧪"
   - Class Range: "Class 9-10"
3. Click "Create Module"

**Expected Results**:
- Form should submit without errors
- Form should close
- Module list should refresh
- New module should appear in the list

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 4: Module Creation - Validation
**Objective**: Verify that required field validation works

**Steps**:
1. Click "+ Create Module"
2. Leave the Title field empty
3. Try to submit the form

**Expected Results**:
- Form should not submit
- Browser should show validation error for required field

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 5: Module Creation - API Error
**Objective**: Verify that API errors are displayed to the user

**Steps**:
1. Stop the backend server
2. Click "+ Create Module"
3. Fill in valid data
4. Click "Create Module"

**Expected Results**:
- Error message should appear in the form
- Form should remain open
- Error message should be descriptive

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 6: Module Expansion
**Objective**: Verify that modules can be expanded to show components

**Steps**:
1. Find a module with components
2. Click the "Expand" button

**Expected Results**:
- Module should expand
- Components table should be visible
- Table should show: Component name, Quantity, Price
- Button should change to "Collapse"

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 7: Module Collapse
**Objective**: Verify that expanded modules can be collapsed

**Steps**:
1. Expand a module (see Test Case 6)
2. Click the "Collapse" button

**Expected Results**:
- Module should collapse
- Components table should be hidden
- Button should change to "Expand"

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 8: Module Editing Form Display
**Objective**: Verify that the edit form opens with pre-filled data

**Steps**:
1. Click the "Edit" button on any module
2. Observe the form that appears

**Expected Results**:
- Form should appear with title "Edit Module"
- All fields should be pre-filled with existing module data
- Submit button should say "Update Module"

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 9: Module Editing - Success
**Objective**: Verify that a module can be updated successfully

**Steps**:
1. Click "Edit" on a module
2. Change the subtitle to "Updated subtitle"
3. Click "Update Module"

**Expected Results**:
- Form should submit without errors
- Form should close
- Module list should refresh
- Module should show updated subtitle

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 10: Module Deletion - Confirmation
**Objective**: Verify that deletion requires confirmation

**Steps**:
1. Click the "Delete" button on any module
2. Observe the confirmation dialog

**Expected Results**:
- Browser confirmation dialog should appear
- Dialog should mention that components will also be deleted
- Dialog should have Cancel and OK options

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 11: Module Deletion - Cancel
**Objective**: Verify that deletion can be cancelled

**Steps**:
1. Click "Delete" on a module
2. Click "Cancel" in the confirmation dialog

**Expected Results**:
- Module should NOT be deleted
- Module should still appear in the list

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 12: Module Deletion - Success
**Objective**: Verify that a module can be deleted successfully

**Steps**:
1. Click "Delete" on a module
2. Click "OK" in the confirmation dialog

**Expected Results**:
- Module should be deleted from the database
- Module list should refresh
- Module should no longer appear in the list
- Delete button should show "Deleting..." during the operation

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 13: Empty State
**Objective**: Verify that empty state is displayed when no modules exist

**Steps**:
1. Delete all modules (or test with empty database)
2. Refresh the page

**Expected Results**:
- Message should say "No modules found. Create your first module to get started."
- No module list should be visible

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 14: Navigation to Dashboard
**Objective**: Verify that the Dashboard button navigates correctly

**Steps**:
1. Click the "Dashboard" button in the header

**Expected Results**:
- Should navigate to `/admin/dashboard`
- Admin dashboard should be displayed

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 15: Form Close Button
**Objective**: Verify that the form can be closed without submitting

**Steps**:
1. Click "+ Create Module"
2. Fill in some data
3. Click the "✕ Close" button

**Expected Results**:
- Form should close
- Data should not be saved
- Module list should remain unchanged

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 16: Form Cancel Button
**Objective**: Verify that the Cancel button closes the form

**Steps**:
1. Click "+ Create Module"
2. Fill in some data
3. Click the "Cancel" button

**Expected Results**:
- Form should close
- Data should not be saved
- Module list should remain unchanged

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 17: Components Display - Empty
**Objective**: Verify that modules without components show appropriate message

**Steps**:
1. Create a module without components (or find one)
2. Click "Expand" on that module

**Expected Results**:
- Module should expand
- Message should say "No components added yet."

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 18: Components Display - Sorted
**Objective**: Verify that components are displayed in order

**Steps**:
1. Find a module with multiple components
2. Click "Expand"
3. Observe the component order

**Expected Results**:
- Components should be sorted by their order field
- Components should appear in sequential order (1, 2, 3, etc.)

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 19: Authentication Check
**Objective**: Verify that the page requires authentication

**Steps**:
1. Log out
2. Try to navigate to `/admin/lab`

**Expected Results**:
- Should be redirected to login page
- Should not be able to access the lab management page

**Status**: ⬜ Pass / ⬜ Fail

---

## Test Case 20: Responsive Design
**Objective**: Verify that the page works on mobile devices

**Steps**:
1. Open the page on a mobile device or resize browser to mobile width
2. Test all functionality

**Expected Results**:
- Layout should adapt to mobile screen
- All buttons should be accessible
- Forms should be usable
- No horizontal scrolling

**Status**: ⬜ Pass / ⬜ Fail

---

## Notes
- All tests should be performed with a clean database state
- Record any bugs or issues found during testing
- Test with different browsers (Chrome, Firefox, Safari)
- Test with different user roles if applicable
