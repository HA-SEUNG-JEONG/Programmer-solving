function solution(n) {
    let prev = 1;
    let curr = 2;
    // 얘도 홀수 짝수 나눠서..?
    if(n === 1) return 1;
    if(n === 2) return 2;
    for(let i=3; i<=n; i++){
        const next = (prev + curr) % 1234567;
        prev = curr;
        curr = next;
    }
    return curr;
}