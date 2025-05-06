function solution(msg) {
    // 1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
  // 1-1. 영문 대문자 A~Z를 각각 1~26번 인덱스를 사전에 미리 등록
  const dictionary = new Map();
  for (let i = 0; i < 26; i++) {
    dictionary.set(String.fromCharCode(65 + i), i + 1);
  }
  // 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
  let w = "";
  let c = "";
  const result = [];

  for (let i = 0; i < msg.length; i++) {
    c = msg[i];

    if (dictionary.has(w + c)) {
      w = w + c;
    } else {
      result.push(dictionary.get(w));
      dictionary.set(w + c, dictionary.size + 1);
      w = c;
    }
  }
  result.push(dictionary.get(w));
  return result;
}