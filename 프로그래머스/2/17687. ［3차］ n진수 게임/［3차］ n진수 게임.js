function solution(n, t, m, p) {
  let answer = "";
  let num = 0;
  let turn = 1;

  while (answer.length < t) {
    const numStr = num.toString(n).toUpperCase();

    for (let i = 0; i < numStr.length && answer.length < t; i++) {
      if (turn === p) {
        answer += numStr[i];
      }
      turn = turn === m ? 1 : turn + 1
    }
    num++;
  }

  return answer;
}