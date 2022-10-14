const testNumbers = require("./testNumbers");
const { assert, expect } = require("chai");

describe("Tests testNumbers object functions", () => {
  describe("Tests sumNumbers function", () => {
    it("Should return undefined if first parametar is string", () => {
      expect(testNumbers.sumNumbers("7", 7)).to.equal(undefined);
    });
    it("Should return undefined if first parametar is null", () => {
        expect(testNumbers.sumNumbers(null, 7)).to.equal(undefined);
      });
    it("Should return undefined if first parametar is array", () => {
      expect(testNumbers.sumNumbers([], 7)).to.equal(undefined);
    });
    it("Should return undefined if first parametar is object", () => {
      expect(testNumbers.sumNumbers({}, 7)).to.equal(undefined);
    });
    it("Should return undefined if first parametar is boolean", () => {
      expect(testNumbers.sumNumbers(true, 7)).to.equal(undefined);
    });
    it("Should return undefined if first parametar is undefined", () => {
      expect(testNumbers.sumNumbers(undefined, 7)).to.equal(undefined);
    });
    it("Should return undefined if second parametar is string", () => {
      expect(testNumbers.sumNumbers(7, "7")).to.equal(undefined);
    });
    it("Should return undefined if second parametar is null", () => {
        expect(testNumbers.sumNumbers(7, null)).to.equal(undefined);
      });
    it("Should return undefined if second parametar is array", () => {
      expect(testNumbers.sumNumbers(7, [])).to.equal(undefined);
    });
    it("Should return undefined if second parametar is obj", () => {
      expect(testNumbers.sumNumbers(7, {})).to.equal(undefined);
    });
    it("Should return undefined if second parametar is boolean", () => {
      expect(testNumbers.sumNumbers(7, true)).to.equal(undefined);
    });
    it("Should return undefined if second parametar is undefined", () => {
      expect(testNumbers.sumNumbers(7, undefined)).to.equal(undefined);
    });
    it("Should return undefined if second both parametars are string", () => {
      expect(testNumbers.sumNumbers("7", "7")).to.equal(undefined);
    });
    it("Should return undefined if second both parametars are arr", () => {
      expect(testNumbers.sumNumbers([7], [])).to.equal(undefined);
    });
    it("Should return undefined if second both parametars are obj", () => {
      expect(testNumbers.sumNumbers({}, {})).to.equal(undefined);
    });
    it("Should return undefined if second both parametars are undefined", () => {
      expect(testNumbers.sumNumbers(undefined, undefined)).to.equal(undefined);
    });
    it("Should return sum if second both parametars are num", () => {
      assert.equal(testNumbers.sumNumbers(5, 5.55), 10.55);
    });
  });
  describe("Tests numberChecker function", () => {
    it("Should throw Error if parametar is string", () => {
      expect(() => testNumbers.numberChecker("JS")).to.throw(
        "The input is not a number!"
      );
    });
    it("Should throw Error if parametar is undefined", () => {
      expect(() => testNumbers.numberChecker(undefined)).to.throw(
        "The input is not a number!"
      );
    });
    it("Should throw Error if parametar is object", () => {
      expect(() => testNumbers.numberChecker({})).to.throw(
        "The input is not a number!"
      );
    });
    it("Should return number is even if parametar is even - string", () => {
        expect(testNumbers.numberChecker('6')).to.equal("The number is even!");
      });
    it("Should return number is even if parametar is even", () => {
      expect(testNumbers.numberChecker(6)).to.equal("The number is even!");
    });
    it("Should return number is odd if parametar is odd", () => {
      expect(testNumbers.numberChecker(7)).to.equal("The number is odd!");
    });
    it("Should return number is odd if parametar is odd-string", () => {
        expect(testNumbers.numberChecker('7')).to.equal("The number is odd!");
      });
  });
  describe("Tests averageSumArray function", () => {
   it('Should work wint integers',() => {
    expect(testNumbers.averageSumArray([1, 3])).to.equal(2)
   })
  });
});
