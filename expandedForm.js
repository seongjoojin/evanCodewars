/*
1. 문자로 변환 후 배열로 치환 index를 쓰기 위해서 배열 뒤집기!
2. map으로 해당 배열 순환 하면서 0이 아닌 것은 resultArray에 push
3. resultArray를 다시 뒤집은 후 join으로 문자열로 치환시 ' + '가 사이가 들어가도록 설정
*/

function expandedForm(num) {
    let resultArray = []
    const splitArray = num.toString().split('').reverse()
    splitArray.map((item, index) => {
        if(item !== '0') resultArray.push(item*Math.pow(10, index))
    })
    return resultArray.reverse().join(' + ')
}

export default expandedForm;