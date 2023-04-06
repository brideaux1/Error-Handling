const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString", function () {
  it("should reverse the string 'fun'", function () {
    expect(reverseString("fun")).to.equal("nuf");
  });
});
