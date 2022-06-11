describe("getOfficeNumber", () => {
  it("should return the expected office number", () => {
    const officeNumber = "1234567";
    const actual = manager.getOfficeNumber();
    expect(actual).toEqual(officeNumber);
  });
});

describe("getRole", () => {
  it("should return the role of manager", () => {
    const manager = "manager";
    const actual = employee.getRole();
    expect(actual).toEqual(manager);
  });
});
