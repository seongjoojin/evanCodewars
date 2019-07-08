/*
1. null과 빈 배열 false처리
2. sort 안 된 배열일 가능성이 있으므로 첫번째 배열의 인자를 곱하고 sort시키고 두번째 배열도 sort시킴
3. sort 첫 번째 배열의 item과 sort 두 번째 배열 item이 같은지 비교후 비교 배열에 false가 있는지 반환
*/

function comp(array1, array2){
    if(array1 === null || array2 === null || array1 === [] || array2 === []) return false;
    const sortArray1 = array1.map(item => item*item).sort()
    const sortArray2 = array2.sort()
    let compArray =  sortArray1.map((item, index) => {
        return item === sortArray2[index]
    })
    return !compArray.includes(false)
}

export default comp;