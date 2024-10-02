const { add } = require("../src/stringCalculator");

describe("Test cases for string calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself if it is valid number given as a string", () => {
    expect(add("7")).toBe(7);
    expect(add("9")).toBe(9);
    expect(add("n")).toBe(0);
    expect(add("p")).toBe(0);
  });
});
