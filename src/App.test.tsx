import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("The application", () => {
  
  it("renders the counter at its initial state(0)", () => {
    render(<App />);
    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });

  it("render the - button", () => {
    render(<App />);
    const minusButton = screen.getByRole("button", { name: "-" });
    expect(minusButton).toBeInTheDocument();
  });

  it("renders the + button", () => {
    render(<App />);
    const plusButton = screen.getByRole("button", { name: "+" });
    expect(plusButton).toBeInTheDocument();
  });

  it("changes the counter value to 1 when the + button is pressed", () => {
    render(<App />);
    const plusButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(plusButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("changes the counter value to -1 when the - button is pressed", () => {
    render(<App />);
    const minusButton = screen.getByRole("button", { name: "-" });
    
    fireEvent.click(minusButton);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("stays at 0 when both buttons are clicked once", () => {
    render(<App />);
    const plusButton = screen.getByRole("button", { name: "+" });
    const minusButton = screen.getByRole("button", { name: "-" });
    fireEvent.click(minusButton);
    fireEvent.click(plusButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
