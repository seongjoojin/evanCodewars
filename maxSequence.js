/*
1. 길이가 0거나 값이 null, undefined면 0로 리턴
2. 구글링..
3. Math.max를 사용하면 둘 중 더 큰값을 반환 해줌. map으로 배열을 돌면서 현재 값과 전의 합계가 0보다 크다면 currentSum라는 변수에 담아주고 이 변수와 maxSum이라는 변수 들의 최대를 비교 후 큰 값으로 maxSum에 반환
*/

function maxSequence(arr) {
    if(arr.length === 0 || !arr) return 0;
    let currentSum = 0;
    let maxSum = 0;
    arr.map(item => {
        currentSum = Math.max((currentSum + item),0)
        maxSum = Math.max(currentSum, maxSum)
    })
    return maxSum
}

export default maxSequence;