function solution(left, right) {
    // 제곱수인 경우 약수의 개수는 홀수
    let answer = 0;
    
    for (let num = left; num <= right; num++) {
        answer = Number.isInteger(Math.sqrt(num)) ? answer - num : answer + num;
    }
    
    return answer;
}