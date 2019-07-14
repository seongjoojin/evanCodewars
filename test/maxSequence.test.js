import maxSequence from "../maxSequence";

test('maxSequence Test', () => {
    expect(maxSequence([])).toBe(0);
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});