describe("getSchool", () => {
  it("should return the expected school", () => {
    const school = "coding-school";
    const actual = intern.getSchool();
    expect(actual).toEqual(school);
  });
});

describe("getRole", () => {
  it("should return the role of intern", () => {
    const intern = "intern";
    const actual = employee.getRole();
    expect(actual).toEqual(intern);
  });
});
