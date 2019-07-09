import findMissingLetter from "../findMissingLetter";

test('findMissingLetter Test', () => {
    expect(findMissingLetter(['a','b','c','d','f'])).toBe('e');
    expect(findMissingLetter(['O','Q','R','S'])).toBe('P');
    expect(findMissingLetter(['e','f','g','h','i','j','k','m'])).toBe('l');
});