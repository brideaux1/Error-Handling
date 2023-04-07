const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("number-fun", function () {
  describe("returnsThree", function () {
    it("should return the number 3", function () {
      expect(returnsThree()).to.equal(3);
    });
  });
  describe("reciprocal", function () {
    describe("valid arguments", function () {
      it("should return the reciprocal of the argument", function () {
        expect(reciprocal(2)).to.equal(0.5);
        expect(reciprocal(5)).to.equal(0.2);
      });
    });

    describe("invalid arguments", function () {
      it("should throw a RangeError for arguments less than 1", function () {
        expect(() => reciprocal(0)).to.throw(
          RangeError,
          "Argument must be between 1 and 1000000"
        );
        expect(() => reciprocal(-1)).to.throw(
          RangeError,
          "Argument must be between 1 and 1000000"
        );
      });

      it("should throw a RangeError for arguments greater than 1000000", function () {
        expect(() => reciprocal(1000001)).to.throw(
          RangeError,
          "Argument must be between 1 and 1000000"
        );
        expect(() => reciprocal(100000000)).to.throw(
          RangeError,
          "Argument must be between 1 and 1000000"
        );
      });
    });
  });
});
