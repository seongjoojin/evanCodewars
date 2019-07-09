/*
1. 대문자/소문자 구별
2. 구별 후 각각의 대/소문자 배열에서 주어진 배열의 처음과 끝 인덱스 값에 해당되는 인덱스를 구함
3. 그 후 구한 인덱스로 대/소문자 배열을 자른 후 주어진 배열에서 없는 값이 있는지 체크
*/

function findMissingLetter(array) {
    let findLetter = ''
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if (array[0] === array[0].toLowerCase() && array[0] !== array[0].toUpperCase()) {
        const sliceArray = lowerCase.slice(lowerCase.indexOf(array[0]), lowerCase.indexOf(array[array.length-1])+1)
        sliceArray.map(item => {
            array.includes(item) ? null : findLetter = item
        })
        // isLowerCase
    } else {
        // isUpperCase
        const sliceArray = upperCase.slice(upperCase.indexOf(array[0]), upperCase.indexOf(array[array.length-1])+1)
        sliceArray.map(item => {
            array.includes(item) ? null : findLetter = item
        })
    }
    return findLetter
}

export default findMissingLetter;