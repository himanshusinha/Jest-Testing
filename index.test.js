const multiply = require("./index");

// TEST SUITE
test("2 and 5 multiplication is equal to 10 ", () => {
  expect(multiply(2, 5)).toBe(10);

  // First Paramete test description
  // expect -> actual value
  // toBe -> actual result
});

// Describe -> It is used to group related test into a test suite
describe("Multiply Function Tests", () => {
  it("2 and 5 multiplication should be 10", () => {
    expect(multiply(2, 5)).toBe(10);
  });
  it("2 and 5 multiplication should be 10", () => {
    expect(multiply(2, 5)).not.toBe(7);
  });
});

// Object Equality
test("object equality test", () => {
  const obj = { name: "Himanshu" };
  expect(obj).toEqual({ name: "Himanshu" });
});
