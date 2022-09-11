const Employee = require('../lib/Employee');


describe('Employee', () => {
    describe("Constructor", () => {
        it("should set 'name' when created", () => {
            const name = "Omar";
            const obj = new Employee(name);
            expect(obj.name).toEqual(name);
        });
        it("should set 'id' when created", () => {
            const id = 2;
            const obj = new Employee("Omar", id);
            expect(obj.id).toEqual(id)
        });
        it("should set 'email' when created", () => {
            const email = "omarfarah@gmail.com";
            const obj = new Employee("Omar", 2, email);
            expect(obj.email).toEqual(email);
        })
    });
    describe("getName()", () => {
        it("should return the 'name' of the Employee", () => {
            const name = "Omar";
            const obj = new Employee(name);
            expect(obj.getName()).toEqual(name)
        });
    });
    describe("getId()", () => {
        it("should return the 'id' of the Employee", () => {
            const id = "553E";
            const obj = new Employee("Omar", id)
            expect(obj.getId()).toEqual(id)
        });
    });
    describe("getEmail", () => {
        it("should return the 'email' of the Employee", () => {
            const email = "omarfarah@gmail.com";
            const obj = new Employee("Omar", "223E", email)
            expect(obj.getEmail()).toEqual(email)
        });
    });
    describe("getRole", () => {
        it("should return the 'role' of the Employee", () => {
            const role = "Employee";
            const obj = new Employee("Omar", "4322", "omarfarah@gmail.com", role)
            expect(obj.getRole()).toEqual(role)
        });
    });
})