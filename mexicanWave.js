/*
1. 주어진 문자열을 자르고 배열로 변환
2. 변환한 배열을 map으로 순환하며 index에 해당하는 값만 대문자로 변환해줌
3. 변환한 값을 새로운 배열에 넣어줌
*/

function mexicanWave(text) {
    let resultArray = []
    const stringArray = text.split("");
    stringArray.map((item,index) => {
        if(item !== ' ') {
            let original = [...stringArray]
            original[index] = item.toUpperCase()
            resultArray.push(original.join(""))
        }
    });
    return resultArray
}

export default mexicanWave;