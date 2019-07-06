/*
1. Use square root (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
2. Make sure that the number of divisions of N is an integer (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
3. Zero is the exception handling
*/
const isSquare = n => {
  if(n === 0) return true
  return Number.isInteger(n/Math.sqrt(n)) ? true : false
}

export default isSquare;