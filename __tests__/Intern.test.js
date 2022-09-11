const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Constructor', () => {
        it("It should set 'name', 'id', 'email', 'school'", () => {
            const name = "Omar";
            const id = "121";
            const email = "omarfarah@gmail.com";
            const school = "Ohio State University";
            const obj = new Intern(name, id, email, school)
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        })
    });
    describe("getSchool()", () => {
        it("should return the school of the Intern", () => {
            const school = "Ohio State University";
            const obj = new Intern("Omar", "33E", "omarfarah@gmail.com", school)
            expect(obj.school).toEqual(school)
        })
    });
    describe("getRole()", () => {
        it("should return the role as Intern", () => {
            const obj = new Intern("Omar", 1111, "omarfarah@gmail.com", "Ohio State University")
            expect(obj.getRole()).toEqual("Intern")
        })
    })
})
