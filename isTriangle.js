/*
1. 삼각형 조건 찾기
2. 제일 긴 변의 길이가 다른 두 변 길이를 합친 것 보다 작아야 삼각형
3. 가장 긴 변의 길이를 찾는것 보다 a, b, c 한 변씩 다른 두 변 보다 큰지를 비교한 것이 더 빠른듯 하여 이 방법으로 해결
*/

function isTriangle(a,b,c)
{
  return a < b + c && b < a + c && c < a + b ? true : false;
}

export default isTriangle;