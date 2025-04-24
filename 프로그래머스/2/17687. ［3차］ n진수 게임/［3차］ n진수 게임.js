function solution(n, t, m, p) {
  let answer = "";
  let str = "";
  let num = 0;

  // 필요한 길이보다 충분히 긴 문자열 생성
  while (str.length < t * m) {
    str += num.toString(n).toUpperCase();
    num++;
  }

  // 튜브의 순서에 맞는 문자만 선택
  for (let i = 0; i < t; i++) {
    answer += str[i * m + (p - 1)];
  }

  return answer;
}
