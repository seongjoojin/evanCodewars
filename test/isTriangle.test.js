import isTriangle from "../isTriangle";

test('isTriangle Test', () => {
    expect(isTriangle(1,2,3)).toBe(false);
    expect(isTriangle(2,3,4)).toBe(true);
    expect(isTriangle(0,0,0)).toBe(false);
});