function solution(d, budget) {
// 최대한 많은 부서를 지원하려면 작은 금액부터 지원해야 함 (그리디 알고리즘)
  const sorted = d.slice().sort((a, b) => a - b);
  let result = 0;
  let remainingBudget = budget;

  for (let i = 0; i < sorted.length; i++) {
    if (remainingBudget >= sorted[i]) {
      remainingBudget -= sorted[i];
      result++;
    } else {
      break; 
    }
  }
  return result;
}