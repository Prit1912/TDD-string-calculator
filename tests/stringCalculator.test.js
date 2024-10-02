const { add } = require("../src/stringCalculator");

describe("Test cases for string calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself if it is valid number given as a string", () => {
    expect(add("7")).toBe(7);
    expect(add("9")).toBe(9);
  });

  test("should return sum of multiple numbers given as a string", () => {
    expect(add("1,2")).toBe(3);
    expect(add("1,3,5")).toBe(9);
    expect(add("2,4,6,8")).toBe(20);
    expect(add("5,10,15,20,25")).toBe(75);
  });

  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
    expect(add("1,2\n3,4\n5,6,7")).toBe(28);
  });

  it("should handle custom delimiters starting with //", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
  });

  it("should handle negative numbers", () => {
    expect(() => add("//;\n1;-2")).toThrow("Negative numbers not allowed");
    expect(() => add("//|\n1|-2|-3")).toThrow("Negative numbers not allowed");
  });
});
