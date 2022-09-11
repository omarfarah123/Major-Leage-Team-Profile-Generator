
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Constructor', () => {
        it("should assign 'name', 'id', 'email', 'officeNumber'", () => {
            const name = "Omar";
            const id = "112E4";
            const email = "omarfarah@gmail.com";
            const officeNumber = 1123;
            const obj = new Manager(name, id, email, officeNumber);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        });
    });
    describe("getRole()", () => {
      it("should return the role as Manager", () => {
        const obj = new Manager("Omar", "omarfarah@gmail.com", 3, 221);
        expect(obj.getRole()).toEqual("Manager");
      })
    })
})