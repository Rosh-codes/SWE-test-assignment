import { add, subtract, multiply, divide } from "../calculator/calculator";

test("addition works", () => {
  expect(add(5, 3)).toBe(8);
});

test("subtraction works", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("multiplication works", () => {
  expect(multiply(6, 7)).toBe(42);
});

test("division works", () => {
  expect(divide(10, 2)).toBe(5);
});

test("division by zero throws error", () => {
  expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
});

test("negative numbers", () => {
  expect(add(-5, -3)).toBe(-8);
});

test("decimal numbers", () => {
  expect(divide(5.5, 2)).toBeCloseTo(2.75);
});

test("large numbers", () => {
  expect(multiply(1000000, 3)).toBe(3000000);
});
