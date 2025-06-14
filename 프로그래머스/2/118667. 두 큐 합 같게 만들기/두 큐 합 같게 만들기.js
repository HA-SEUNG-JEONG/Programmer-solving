
function solution(queue1, queue2) {
    const totalSum = queue1.reduce((a, b) => a + b, 0) + queue2.reduce((a, b) => a + b, 0);
    if (totalSum % 2 !== 0) return -1;
    
    const target = totalSum / 2;
    const maxOperations = queue1.length * 3; // 모든 원소를 한 바퀴 도는 최대 횟수
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = totalSum - sum1;
    
    let operations = 0;
    let i1 = 0, i2 = 0; // 각 큐의 현재 인덱스
    
    while (operations <= maxOperations) {
        if (sum1 === target) return operations;
        
        if (sum1 > target) {
            // 큐1에서 빼서 큐2에 넣기
            const num = i1 < queue1.length ? queue1[i1] : queue2[i1 - queue1.length];
            sum1 -= num;
            sum2 += num;
            i1++;
        } else {
            // 큐2에서 빼서 큐1에 넣기
            const num = i2 < queue2.length ? queue2[i2] : queue1[i2 - queue2.length];
            sum1 += num;
            sum2 -= num;
            i2++;
        }
        operations++;
    }
    
    return -1;
}
