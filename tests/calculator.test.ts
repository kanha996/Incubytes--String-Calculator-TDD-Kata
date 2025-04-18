import { add } from "../src/calculator";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("handles unknown amount of numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws on negative numbers with message", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
  });
});
