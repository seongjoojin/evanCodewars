import mexicanWave from "../mexicanWave";

test('Mexican Wave Test', () => {
    expect(mexicanWave("hello")).toEqual(["Hello","hEllo","heLlo","helLo","hellO"]);
    expect(mexicanWave("codewars")).toEqual(["Codewars","cOdewars","coDewars","codEwars","codeWars","codewArs","codewaRs","codewarS"]);
    expect(mexicanWave("two words")).toEqual(["Two words","tWo words","twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]);
    expect(mexicanWave(" gap ")).toEqual([" Gap ", " gAp ", " gaP "]);
});