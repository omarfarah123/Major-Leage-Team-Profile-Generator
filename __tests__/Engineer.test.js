const Engineer = require('../lib/Engineer');



describe('Engineer', () => {
    describe('Constructor', () => {
        it("It should set 'name', 'id', 'email', 'github'", () => {
            const name = "Omar";
            const id = "121";
            const email = "omarfarah@gmail.com";
            const github = "omarfarah123";
            const obj = new Engineer(name, id, email, github)
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        })
    })
    describe('getGithub()', () => {
        it("should return the github username of the Engineer", () => {
            const github = "omarfarah123";
            const obj = new Engineer("Omar", 22, "omarfarah@gmail.com", github);
            expect(obj.github).toEqual(github);
        });
    });
    describe("getRole()", () => {
        it("should return the role of the Engineer as well Engineer", () => {
            const obj = new Engineer("Omar", 23, "omarfarah@gmail.com", "omarfarah123");
            expect(obj.getRole()).toEqual("Engineer")
        })
    })
})

