import spinWords from "../spinWords";

test('spinWords Test', () => {
    expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
    expect(spinWords("This is a test")).toBe("This is a test");
    expect(spinWords("This is another test")).toBe("This is rehtona test");
});