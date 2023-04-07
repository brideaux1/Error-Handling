const myMap = require("../problems/my-map");
const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

describe("myMap", () => {
  it("does not mutate the passed-in array argument", () => {
    const arr = [1, 2, 3];
    const callback = (el) => el * 2;
    expect(myMap(arr, callback)).to.not.equal(arr);
  });
  it("should not call the built-in Array.prototype.map() function", () => {
    const mapSpy = chai.spy.on(Array.prototype, "map");
    myMap([100, 25, 81, 64], Math.sqrt);
    expect(mapSpy).to.have.not.been.called();
  });

  it("callback function should modify each element once", () => {
    const arr = [1, 2, 3];
    const callback = (el) => el * 2;

    expect(myMap(arr, callback)).to.be.eql([2, 4, 6]);
  });
});
