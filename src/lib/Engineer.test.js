describe("getGithubUsername", () => {
  it("should return the expected username", () => {
    const username = "amirtha-coder";
    const actual = engineer.getGithubUsername();
    expect(actual).toEqual(username);
  });
});
describe("getRole", () => {
  it("should return the role of engineer", () => {
    const engineer = "engineer";
    const actual = employee.getRole();
    expect(actual).toEqual(engineer);
  });
});
