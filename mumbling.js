/*
1. 주어진 문자열을 대문자로 변환하여 배열로 치환
2. 배열을 map으로 돌면서 0이면 현재값 그대로는 아니면 현재값에 현재값의 소문자와 인덱스 값이 곱해진 값을 반환해줌
3. 반환된 값이 담긴 배열을 join으로 합쳐줌.
*/
function mumbling(s) {
    let resultArray=[]; 
	const splitString = s.toUpperCase().split('');
    splitString.map((item,index) => {
        return index === 0 ? resultArray.push(item) : resultArray.push(`${item}${item.toLowerCase().repeat(index)}`)
    })
    return resultArray.join("-")
}

export default mumbling;