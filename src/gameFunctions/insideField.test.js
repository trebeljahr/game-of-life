import insideField from "./insideField.js";

it("number is not insideField", () => {
  expect(insideField(4, 5)).toBe(false);
  expect(insideField(0, 5)).toBe(false);
});
it("number is insideField", () => {
  expect(insideField(6, 5)).toBe(true);
});
