import getCount from "../getCount";

test("getCount Test", () => {
  expect(getCount("abracadabra")).toBe(5);
});
