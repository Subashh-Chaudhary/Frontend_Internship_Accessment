import { render, screen, fireEvent } from "@testing-library/react";
import KanbaBoard from "../components/KanbaBoard";
import "@testing-library/jest-dom"; // This adds custom matchers like toBeInTheDocument

describe("KanbanBoard integration tests", () => {
  it("allows the user to add a new column", () => {
    render(<KanbaBoard />);

    // Click "Add Column" button
    const addColumnButton = screen.getByText(/Add Column/i);
    fireEvent.click(addColumnButton);

    // Type into the input field
    const inputField = screen.getByPlaceholderText(/enter column title/i);
    fireEvent.change(inputField, { target: { value: "New Column" } });

    // Click the "Save" button
    const saveButton = screen.getByText(/save/i);
    fireEvent.click(saveButton);

    // Assert the new column is visible
    expect(screen.getByText("New Column")).toBeInTheDocument();
  });
});
