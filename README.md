# evanCodewars

just go

## test1

```
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
```

### 인증샷

![Test 1](/screenshot/test1.png)

### 풀이

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

function spinWords(words){
  //TODO Have fun :)
  const splitString = words.split(' ')
  const resultArray = splitString.map(
    word => word.length >= 5
    ? reverseString(word)
    : word
  )
  return resultArray.join(" ")
}
```

### 세 줄 요약

1. 문자열에서 어떻게 공백을 뺄 수 있을까 찾다가 split로 string을 array로 변경할 수 있음을 발견함 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
2. 문자 반전부터 생각이 안 나서 찾아보다가 join을 찾게됨 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
3. array을 반복해서 체크하는 방법을 찾다가 filter와 map을 찾게 되었고 그 중에서 map을 선택하였는데 이유는 filter의 경우는 특정 조건에 걸리는 것들만 return 하였기에 제가 원하는 형태는 아니여서 map을 선택하게 되었습니다. (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map, https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### best practice

https://www.codewars.com/kata/reviews/5264d41ce218b86cb90000df/groups/526b93e72368672a19000113

