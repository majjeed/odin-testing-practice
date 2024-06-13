import { test, expect } from "@jest/globals";
import { sum, capitalize, reverseString } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverses a string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});
