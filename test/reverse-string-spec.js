const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString", function () {
  it("should reverse the string 'fun'", function () {
    expect(reverseString("fun")).to.equal("nuf");
  });

  it("should throw a TypeError if argument is not a string", function () {
    expect(function () {
      reverseString(5);
    }).to.throw(TypeError);
  });
});
