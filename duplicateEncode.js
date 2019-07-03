/*
1. 먼저 주어진 문자열을 소문자로 다 변환한 후 한 문자씩 짤라서 배열로 저장
2. 배열의 length만큼 "("로 채워주는 배열을 만듬
3. 중복 체크를 위해 set으로 배열의 값 중 중복된 것을 제거함 (체크용)
4. 중복 체크용으로 배열에서 각 문자가 가지는 중복 갯수를 보내줌
5. 중복 갯수가 2개를 넘어갈 경우 ")"로 넣어줌
6. join으로 배열에서 문자열로 반환
*/

function duplicateEncode(word){
    let dupes = {}
    let fillArray = []
    const charArray = word.toLowerCase().split('');
    const uniqueArray = [...new Set(charArray)]
    charArray.map(() => {
      fillArray.push("(")
    })
    charArray.map((item, index) => {
      dupes[item] = dupes[item] || []
      dupes[item].push(index)
    })
    uniqueArray.map(item => {
      dupes[item].length >= 2 ? dupes[item].map(item => fillArray[item] = ")") : null
    })
    return fillArray.join('')
}