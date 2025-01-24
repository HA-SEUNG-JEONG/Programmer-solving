function solution(n) {
    let count = 0;
    
    // k는 연속된 숫자의 개수
    // (2 * n)의 제곱근까지만 확인하면 됨
    for(let k = 1; k <= Math.sqrt(2 * n); k++) {
        // n - (k * (k-1) / 2)가 k로 나누어 떨어지는지 확인
        if((n - (k * (k-1) / 2)) % k === 0) {
            count++;
        }
    }
    
    return count;
}