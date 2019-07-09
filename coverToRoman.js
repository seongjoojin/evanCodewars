/*
1. 자릿수별로 변환할 로마숫자를 지정
2. 해당하는 자리의 수의 숫자를 구하고 해당하는 인덱스가 값으로 반환 (가장 큰 자리는 나누기 후 반올림, 나머지 자리수에서는 몫에서 나누기 반올림)
3.Math.floor로 반올림하여서 해당 자리 숫자만 반환하도록 조정
*/
function coverToRoman(number) {
    const M = ["","M","MM","MMM"]   // 1000단위
    const C = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]   // 100단위
    const X = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]   // 10단위
    const I = ["","I","II","III","IV","V","VI","VII","VIII","IX"]   // 1단위
    return M[Math.floor((number/1000))]+C[Math.floor((number%1000)/100)]+X[Math.floor((number%100)/10)]+I[Math.floor(number%10)]
}

export default coverToRoman;