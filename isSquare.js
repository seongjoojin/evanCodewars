function main() {
  const sample1 = -1;
  const sample2 = 0;
  const sample3 = 3;
  const sample4 = 4;
  const sample5 = 25;
  const sample6 = 26;
  const result = isSquare(sample1);
  console.log(result);
}

/*
1. Use square root (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
2. Make sure that the number of divisions of N is an integer (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
3. Zero is the exception handling
*/
const isSquare = n => {
  if(n === 0) return true
  return Number.isInteger(n/Math.sqrt(n)) ? true : false
}

main()