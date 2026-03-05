import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator";

test("5 + 3 = 8", () => {
  render(<Calculator />);

  fireEvent.change(screen.getByPlaceholderText("Number 1"), {
    target: { value: "5" },
  });

  fireEvent.change(screen.getByPlaceholderText("Number 2"), {
    target: { value: "3" },
  });

  fireEvent.click(screen.getByText("+"));

  expect(screen.getByTestId("result")).toHaveTextContent("8");
});

test("clear resets result to 0", () => {
  render(<Calculator />);

  fireEvent.change(screen.getByPlaceholderText("Number 1"), {
    target: { value: "5" },
  });

  fireEvent.change(screen.getByPlaceholderText("Number 2"), {
    target: { value: "3" },
  });

  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("C"));

  expect(screen.getByTestId("result")).toHaveTextContent("Result: 0");
});
