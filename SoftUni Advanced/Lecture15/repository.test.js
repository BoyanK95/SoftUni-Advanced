const { Repository } = require("./repository");
const { expect } = require("chai");

describe("Repository", function () {
  let properties = {
    name: "string",
    age: "number",
    birthday: "object",
  };

  let entity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7),
  };

  describe("Initilization", function () {
    it("Should add props propety to init", function () {
      let repo = new Repository(properties);

      expect(repo).to.have.property("props");
      expect(repo.props).to.deep.equal(properties);
    });
    it("Should have property data on ini", () => {
      let properties = {
        name: "string",
        age: "number",
        birthday: "object",
      };

      let repo = new Repository(properties);

      expect(repo).to.have.property("data");
      expect(typeof repo.data).is.equal("object");
      expect(repo.data).instanceOf(Map);
    });
  });

  describe("Add entity", () => {
    it("Should return incremented id if valid entity is added", () => {
      let repo = new Repository(properties);

      expect(repo.add(entity)).to.be.equal(0);
      expect(repo.add(entity)).to.be.equal(1);
    });

    it("should store valid entity in data map", () => {
      let repo = new Repository(properties);

      repo.add(entity);

      expect(repo.data.get(0)).not.to.be.undefined;
      expect(repo.data.get(0)).to.deep.equal(entity);
    });

    it("should trow error if property is missing", () => {
      let entity = {
        name: "Pesho",
        age: 22,
      };

      let repo = new Repository(properties);

      expect(() => repo.add(entity)).to.throw(Error, `Property birthday is missing from the entity!`)
    });

    it('should throw error if property has other type', ()=>{
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: '1998-01-06T22:00:00.000Z',
          };

          let repo = new Repository(properties);

      expect(() => repo.add(entity)).to.throw(Error, `Property birthday is not of correct type!`)
          

    });
  });
  describe("Get count", () => {
    it("Should return number of add valid entities", () => {

      let repo = new Repository(properties);
      repo.add(entity);
      repo.add(entity);
      repo.add(entity);
      
      expect(repo.count).is.equal(3);
    });
  });
});
