/*
1. 주어진 문자열을 문자로 변환후 각 문자마다 자르기
2. count변수를 만들어서 제곱근한 값들을 더함. 마지막 인덱스가 array의 모든 값을 더한 값이 됨.
3. 모든 값을 더한 것을 n으로 나눠주고 정수인지 체크하고 맞으면 나눠진 수를 아니면 -1을 반환
*/

function digPow(n, p){
    let count = 0
    const arrayLength = n.toString().split('').length;
    const powArray = n.toString().split('').map(item => {
        item = Math.pow(item, p);
        ++p;
        count += item
        return count
    })
    return Number.isInteger(powArray[arrayLength-1]/n) ? powArray[arrayLength-1]/n : -1
}

export default digPow;