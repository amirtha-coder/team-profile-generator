const Engineer = require("./Engineer");
describe("Engineer", () => {
  it("should be an instance of an Employee", () => {
    const engineer = new Engineer("Sarah");
    const actual = engineer.getName();
    expect(actual).toEqual("Sarah");
  });

  it("should return the expected name", () => {
    const engineer = new Engineer();
    engineer.name = "Sarah";
    const actual = engineer.getName();
    expect(actual).toEqual("Sarah");
  });

  it("should return the expected id", () => {
    const engineer = new Engineer();
    engineer.id = "1234567";
    const actual = engineer.getId();
    expect(actual).toEqual("1234567");
  });

  it("should return the expected email", () => {
    const engineer = new Engineer();
    engineer.email = "samsmith@email.com";
    const actual = engineer.getEmail();
    expect(actual).toEqual("samsmith@email.com");
  });

  it("should return the expected username", () => {
    const engineer = new Engineer();
    engineer.githubUsername = "amirtha-coder";
    const actual = engineer.getGithubUsername();
    expect(actual).toEqual("amirtha-coder");
  });

  it("should return the role of engineer", () => {
    const engineer = new Engineer();
    engineer.role = "Engineer";
    const actual = engineer.getRole();
    expect(actual).toEqual("Engineer");
  });
});
