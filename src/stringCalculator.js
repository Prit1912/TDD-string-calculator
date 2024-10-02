class StringCalculator {
  constructor() {
    // Track the number of times add() is called
    this.addFunctioncalledCount = 0;
  }

  add(numberString) {
    // increase called count
    this.addFunctioncalledCount++;

    // check for empty string
    if (!numberString?.length) {
      return 0;
    }

    /* check for below input scenarios
    1. Single number input
    2. multiple number input separated by comma 
    3. handle new line in input string
    4. handle differnt custom delimeters
    5. handle negative number
    6. get how many times add function was called
    7. number greater than 1000 should be ingore
    8. handle delimeter of any length
    */

    let delimiter = /[\n,]/; // Default delimiter
    if (numberString.startsWith("//")) {
      const parts = numberString.split("\n");
      // Extract custom delimiter which is after //

      const newDelimiter = parts[0].slice(2);

      if (newDelimiter.startsWith("[") && newDelimiter.endsWith("]")) {
        delimiter = new RegExp(`${newDelimiter.slice(1, -1)}`);
      } else {
        delimiter = new RegExp(`[${newDelimiter}]`);
      }

      numberString = parts[1];
    }

    let numArray = numberString.split(delimiter);
    console.log(numArray);

    // check for negative numbers
    let negativeNumbers = numArray.filter((num) => parseInt(num) < 0);
    if (negativeNumbers?.length) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(",")}`
      );
    }

    numArray = numArray.filter((num) => parseInt(num) <= 1000);

    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  }

  getAddFunctionCalledCount() {
    return this.addFunctioncalledCount;
  }
}

module.exports = { StringCalculator };
