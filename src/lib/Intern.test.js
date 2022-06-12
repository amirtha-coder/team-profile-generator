const Intern = require("./Intern");
describe("getName", () => {
  it("should be an instance of an Employee", () => {
    const intern = new Intern("Sarah");
    const actual = intern.getName();
    expect(actual).toEqual("Sarah");
  });
});
describe("getName", () => {
  it("should return the expected name", () => {
    const intern = new Intern();
    intern.name = "Sarah";
    const actual = intern.getName();
    expect(actual).toEqual("Sarah");
  });
});
``;

describe("getId", () => {
  it("should return the expected id", () => {
    const intern = new Intern();
    intern.id = "1234567";
    const actual = intern.getId();
    expect(actual).toEqual("1234567");
  });
});
describe("getEmail", () => {
  it("should return the expected email", () => {
    const intern = new Intern();
    intern.email = "samsmith@email.com";
    const actual = intern.getEmail();
    expect(actual).toEqual("samsmith@email.com");
  });
});
describe("getSchool", () => {
  it("should return the expected school", () => {
    const intern = new Intern();
    intern.school = "coding-school";
    const actual = intern.getSchool();
    expect(actual).toEqual("coding-school");
  });
});

describe("getRole", () => {
  it("should return the role of intern", () => {
    const intern = new Intern();
    intern.role = "Intern";
    const actual = intern.getRole();
    expect(actual).toEqual("Intern");
  });
});
