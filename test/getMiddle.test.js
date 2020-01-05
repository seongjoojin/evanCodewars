import getMiddle from "../getMiddle";

test("getMiddle Test", () => {
  expect(getMiddle("test")).toBe("es");
  expect(getMiddle("testing")).toBe("t");
  expect(getMiddle("middle")).toBe("dd");
  expect(getMiddle("A")).toBe("A");
});
