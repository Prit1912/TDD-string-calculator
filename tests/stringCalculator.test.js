const { add } = require("../src/stringCalculator");

describe("Test cases for string calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
