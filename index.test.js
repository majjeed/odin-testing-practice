import { test, expect } from "@jest/globals";
import { capitalize, reverseString, calculator } from "./index";

test("capitalize first character of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize first character of a sentence", () => {
  expect(capitalize("this is a sentence.")).toBe("This is a sentence.");
});

test("reverses a string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("reverses a sentence", () => {
  expect(reverseString("This is a sentence.")).toMatch(".ecnetnes a si sihT");
});

test("calculator adds 2 numbers", () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test("calculator subtracts 2 numbers", () => {
  expect(calculator.subtract(55, 30)).toBe(25);
});

test("calculator divides 2 numbers", () => {
  expect(calculator.divide(64, 4)).toBe(16);
});

test("calculator multiplies 2 numbers", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
