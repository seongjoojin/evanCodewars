import evenOrOdd from "../evenOrOdd";

test("evenOrOdd Test", () => {
  expect(evenOrOdd(2)).toBe("Even");
  expect(evenOrOdd(0)).toBe("Even");
  expect(evenOrOdd(7)).toBe("Odd");
  expect(evenOrOdd(1)).toBe("Odd");
});
