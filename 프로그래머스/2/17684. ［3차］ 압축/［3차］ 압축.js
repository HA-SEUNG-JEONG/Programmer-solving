function solution(msg) {
 // 1. 영문 대문자 A~Z를 1~26번 인덱스로 사전 초기화
  const dictionary = new Map();
  for (let i = 0; i < 26; i++) {
    dictionary.set(String.fromCharCode(65 + i), i + 1);
  }

  const result = [];
  let dictSize = 27; // 다음에 추가될 색인 번호
  let idx = 0; // 입력 문자열에서 현재 탐색 위치

  while (idx < msg.length) {
    let w = msg[idx];
    let nextIdx = idx + 1;

    // 사전에 있는 가장 긴 문자열 w 찾기
    while (nextIdx <= msg.length && dictionary.has(msg.slice(idx, nextIdx))) {
      w = msg.slice(idx, nextIdx);
      nextIdx++;
    }

    // w의 색인 번호 결과에 추가
    result.push(dictionary.get(w));

    // w 다음 글자가 있다면, w+c를 사전에 등록
    if (nextIdx <= msg.length) {
      const newEntry = msg.slice(idx, nextIdx);
      dictionary.set(newEntry, dictSize++);
    }

    // idx를 w 다음 위치로 이동
    idx += w.length;
  }

  return result;
}