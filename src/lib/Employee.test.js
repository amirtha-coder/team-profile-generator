const Employee = require("./Employee");

describe("Employee", () => {
  it("should be an instance of an Employee", () => {
    const employee = new Employee("Sarah");
    const actual = employee.getName();
    expect(actual).toEqual("Sarah");
  });

  it("should return the expected name", () => {
    const employee = new Employee();
    employee.name = "Sarah";
    const actual = employee.getName();
    expect(actual).toEqual("Sarah");
  });

  it("should return the expected id", () => {
    const employee = new Employee();
    employee.id = "1234567";
    const actual = employee.getId();
    expect(actual).toEqual("1234567");
  });

  it("should return the expected email", () => {
    const employee = new Employee();
    employee.email = "samsmith@email.com";
    const actual = employee.getEmail();
    expect(actual).toEqual("samsmith@email.com");
  });

  it("should return the role of Employee", () => {
    const employee = new Employee();
    employee.role = "Employee";
    const actual = employee.getRole();
    expect(actual).toEqual("Employee");
  });
});
