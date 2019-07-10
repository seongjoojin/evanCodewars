/*
1. 두 숫자 다 배열로 변환
2. 둘 다 조건대로 filter (첫번째 수는 3개가 순서대로 같아야함, 두번째 수는 2개가 순서대로 같아야함)
3. 필터된 첫번째 수의 배열에 있는 수가 필터된 두번째 수의 배열에 있다면 1을 반환하고 그 외에는 0을 반환함
*/

function tripledouble(num1, num2) {
    let result = 0;
    const firstArray = num1.toString().split("");
    const secondArray = num2.toString().split("");
    const firstFilterArray = firstArray.filter((item,index) => item === firstArray[index+1] && firstArray[index+1] === firstArray[index+2])
    const secondFilterArray = secondArray.filter((item,index) => item === secondArray[index + 1] )
    firstFilterArray.forEach(item => {
        return secondFilterArray.includes(item) ? result = 1 : 0
    })
    return result;
  }

  export default tripledouble;