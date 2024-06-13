import { test, expect } from "@jest/globals";
import { capitalize, reverseString, calculator, caesarCipher } from "./index";

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

test("encrypt with caesar cipher key", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("caesar cipher with negative key", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("caesar cipher wraps around", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar cipher with key & original letter case", () => {
  expect(caesarCipher("aBc", 3)).toBe("dEf");
});

test("caesar cipher negative key & original letter case", () => {
  expect(caesarCipher("aBc", -3)).toBe("xYz");
});

test("caesar cipher wraps around & original letter case", () => {
  expect(caesarCipher("xYz", 3)).toBe("aBc");
});
