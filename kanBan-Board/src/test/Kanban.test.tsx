import { render, screen } from "@testing-library/react";
import KanbaBoard from "../components/KanbaBoard";
import "@testing-library/jest-dom"; // This adds custom matchers like toBeInTheDocument


describe("KanbaBoard", () => {
  it("renders the Add Column button", () => {
    render(<KanbaBoard />); // Render the component
    const addColumnButton = screen.getByText(/Add Column/i); // Find the button
    expect(addColumnButton).toBeInTheDocument(); // Assert it exists
  });
});

