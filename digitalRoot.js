/*
1. 문자열로 만들고 나누어서 배열로 저장
2. 배열에서 더한 후 더한 수를 다시 문자열로 만들어서 나누고 배열로 저장
3. 더한 배열의 길이가 1이 되면 값을 return 시킴
*/
function sumArray(array) {
    let count = 0
    return array.map(item => {
        count += Number(item)
        return count
    })
}

function digitalRoot(n) {
    let saveArray = sumArray(n.toString().split(''))
    while (saveArray[saveArray.length - 1].toString().split('').length !== 1) {
        saveArray = sumArray(saveArray[saveArray.length - 1].toString().split(''))
    }
    return saveArray[saveArray.length - 1]
}

export default digitalRoot;