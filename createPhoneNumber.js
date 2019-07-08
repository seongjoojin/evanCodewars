/*
1. use es6 template strings https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
2. slice array https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
3. use join (remove comma) https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join  
*/
function createPhoneNumber(numbers){
  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}

export default createPhoneNumber;