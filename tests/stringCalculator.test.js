const { StringCalculator } = require("../src/stringCalculator");

describe("Test cases for string calculator", () => {
  let strCalculator;

  beforeEach(() => {
    strCalculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(strCalculator.add("")).toBe(0);
  });

  test("should return the number itself if it is valid number given as a string", () => {
    expect(strCalculator.add("7")).toBe(7);
    expect(strCalculator.add("9")).toBe(9);
  });

  test("should return sum of multiple numbers given as a string", () => {
    expect(strCalculator.add("1,2")).toBe(3);
    expect(strCalculator.add("1,3,5")).toBe(9);
    expect(strCalculator.add("2,4,6,8")).toBe(20);
    expect(strCalculator.add("5,10,15,20,25")).toBe(75);
  });

  test("should handle new lines between numbers", () => {
    expect(strCalculator.add("1\n2,3")).toBe(6);
    expect(strCalculator.add("1\n2\n3")).toBe(6);
    expect(strCalculator.add("1,2\n3,4\n5,6,7")).toBe(28);
  });

  test("should handle custom delimiters starting with //", () => {
    expect(strCalculator.add("//;\n1;2")).toBe(3);
    expect(strCalculator.add("//|\n1|2|3")).toBe(6);
  });

  test("should handle negative numbers", () => {
    expect(() => strCalculator.add("//;\n1;-2")).toThrow(
      "Negative numbers not allowed: -2"
    );
    expect(() => strCalculator.add("//|\n1|-2|-3")).toThrow(
      "Negative numbers not allowed: -2,-3"
    );
  });

  test("should return the number of times add() has been called", () => {
    expect(strCalculator.getAddFunctionCalledCount()).toBe(0); // No call yet, should be 0
    strCalculator.add("1,2");
    expect(strCalculator.getAddFunctionCalledCount()).toBe(1); // One call, should be 1
    strCalculator.add("3,4");
    expect(strCalculator.getAddFunctionCalledCount()).toBe(2); // Two calls, should be 2
  });

  test("should ignore number greater than 1000", () => {
    expect(strCalculator.add("1001,2,3")).toBe(5);
    expect(strCalculator.add("//;\n1001;2;3")).toBe(5);
  });

  test("should handle delimiters of any length", () => {
    expect(strCalculator.add("//[;;;]\n1;;;2;;;3")).toBe(6);
    expect(strCalculator.add("//[,,,]\n10,,,20,,,30")).toBe(60);
  });
});
