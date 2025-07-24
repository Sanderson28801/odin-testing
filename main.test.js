import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseStr.js";
import { calculator } from "./calculator.js";
import { caesarCipher } from "./caesar.js";
//console.log(capitalize("hi"));

describe("Capitalize Function", () => {
  test("test Capitalize word", () => {
    let testCases = [
      { input: "hi", expected: "Hi" },
      { input: "hello", expected: "Hello" },
      { input: "", expected: "" },
      { input: ".ajk12-3df", expected: ".ajk12-3df" },
    ];
    testCases.forEach((str) => {
      expect(capitalize(str.input)).toEqual(str.expected);
    });
  });
});

describe("Reverse String Function", () => {
  test("test reverse string", () => {
    expect(reverseString("abcde")).toBe("edcba");
  });
  test("test reverse empty string", () => {
    expect(reverseString("")).toBe("");
  });
  test("test reverse string with many other characters", () => {
    expect(reverseString("adsfjkl2eiuaslna;dslkfjoqihdf.ks")).toBe(
      "sk.fdhiqojfklsd;anlsauie2lkjfsda"
    );
  });
});

describe("Test Calculator", () => {
  test("add (1)", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("add (2)", () => {
    expect(calculator.add(-1000, 2)).toBe(-998);
  });
  test("subtract", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  test("multiply", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  test("divide", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });
});

describe("test caesar cipher", () => {
  test("test word with 0 shift", () => {
    expect(caesarCipher("hii", 0)).toBe("hii");
  });
  test("test word with 1 shift", () => {
    expect(caesarCipher("hii", 1)).toBe("ijj");
  });
  test("test word with 2 shift", () => {
    expect(caesarCipher("hii", 2)).toBe("jkk");
  });
  test("test empty string", () => {
    expect(caesarCipher("", 10)).toBe("");
  });
  test("test string with capitals", () => {
    expect(caesarCipher("HIi", 1)).toBe("IJj");
  });
  test("test string with punctuation", () => {
    expect(caesarCipher("Hi.,/", 1)).toBe("Ij.,/");
  });
  test("test wrapping around cipher", () => {
    expect(caesarCipher("xyzXYZ", 3)).toBe("abcABC");
  });
});
