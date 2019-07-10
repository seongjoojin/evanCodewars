import tripledouble from "../tripledouble";

test('tripledouble Test', () => {
    expect(tripledouble(451999277,41177722899)).toBe(1);
    expect(tripledouble(1222345, 12345)).toBe(0);
    expect(tripledouble(12345, 12345)).toBe(0);
    expect(tripledouble(666789, 12345667)).toBe(1);
    expect(tripledouble(10560002, 100)).toBe(1);
    expect(tripledouble(6974613331333666, 431626338)).toBe(1);
    expect(tripledouble(23244927222999, 2339596622)).toBe(1);
});