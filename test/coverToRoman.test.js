import coverToRoman from "../coverToRoman";

test('coverToRoman Test', () => {
    expect(coverToRoman(10)).toBe('X');
    expect(coverToRoman(19)).toBe('XIX');
    expect(coverToRoman(1990)).toBe('MCMXC');
    expect(coverToRoman(2008)).toBe('MMVIII');
});