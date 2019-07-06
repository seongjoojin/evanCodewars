import duplicateEncode from "../duplicateEncode";

test('duplicateEncode Test', () => {
    expect(duplicateEncode("din")).toBe("(((");
    expect(duplicateEncode("recede")).toBe("()()()");
    expect(duplicateEncode("Success")).toBe(")())())");
    expect(duplicateEncode("(( @")).toBe("))((");
});