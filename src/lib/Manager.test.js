const Manager = require("./Manager");
describe("Manager", () => {
  it("should be an instance of a Manager", () => {
    const manager = new Manager("Sarah");
    const actual = manager.getName();
    expect(actual).toEqual("Sarah");
  });
});

it("should return the expected name", () => {
  const manager = new Manager();
  manager.name = "Sarah";
  const actual = manager.getName();
  expect(actual).toEqual("Sarah");
});

it("should return the expected id", () => {
  const manager = new Manager();
  manager.id = "1234567";
  const actual = manager.getId();
  expect(actual).toEqual("1234567");
});

it("should return the expected email", () => {
  const manager = new Manager();
  manager.email = "samsmith@email.com";
  const actual = manager.getEmail();
  expect(actual).toEqual("samsmith@email.com");
});

it("should return the expected office number", () => {
  const manager = new Manager();
  manager.officeNumber = "123489962";
  const actual = manager.getOfficeNumber();
  expect(actual).toEqual("123489962");
});

it("should return the role of manager", () => {
  const manager = new Manager();
  manager.role = "Manager";
  const actual = manager.getRole();
  expect(actual).toEqual("Manager");
});
