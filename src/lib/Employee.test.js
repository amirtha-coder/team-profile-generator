describe("getName", () => {
  it("should be an instance of an Employee", () => {
    const employee = new Employee("Sarah");
    const actual = employee.getName();
    expect(actual).toEqual("Sarah");
  });
});
describe("getName", () => {
  it("should return the expected name", () => {
    const employee = "Sarah";
    const actual = employee.getName();
    expect(actual).toEqual(employee);
  });
});

describe("getId", () => {
  it("should return the expected id", () => {
    const id = "1234567";
    const actual = employee.getId();
    expect(actual).toEqual(id);
  });
});
describe("getEmail", () => {
  it("should return the expected email", () => {
    const email = "samsmith@email.com";
    const actual = employee.getEmail();
    expect(actual).toEqual(email);
  });
});
describe("getRole", () => {
  it("should return the role of Employee", () => {
    const employee = "Employee";
    const actual = employee.getRole();
    expect(actual).toEqual(employee);
  });
});
