/*
1. 모음(a, e, i, o, u)인지를 확인하고 모음이면 vowelsCount의 수를 증가시킵니다.
*/

function getCount(str) {
  let vowelsCount = 0;

  // enter your majic here
  str.split("").map(item => {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      return (vowelsCount += 1);
    }
  });

  return vowelsCount;
}

export default getCount;
