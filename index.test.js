import { test, expect } from "@jest/globals";
import { capitalize, reverseString } from "./index";

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
