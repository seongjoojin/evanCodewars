/*
1. 텍스트의 길이가 홀수인지 짝수인지 먼저 분별합니다.
2. 그 후 텍스트를 짤라서 짝수인 경우에는 중간의 두 글자를 반환하게 하고 홀수 인 경우 한 글자를 반환하게 합니다.
3. 텍스트 길이에서 2를 나누어서 짝수에 경우에는 1을 더하고 빼고 하여 두글자를 홀수의 경우에는 0.5를 더하고 빼서 한 글자를 반환하게 합니다.
*/
function getMiddle(s) {
  //Code goes here!
  if (s.length % 2 === 0) {
    const dvideNumber = s.length / 2;
    return s.slice(dvideNumber - 1, dvideNumber + 1);
  } else {
    const dvideNumber = s.length / 2;
    return s.slice(dvideNumber - 0.5, dvideNumber + 0.5);
  }
}

export default getMiddle;
