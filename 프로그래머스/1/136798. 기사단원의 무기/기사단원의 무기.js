
function solution(number, limit, power) {
    const divisorCounts = new Array(number + 1).fill(1);
    for (let i = 2; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisorCounts[j]++;
        }
    }
    // 공격력 계산 및 철의 무게 합산
    let totalWeight = 0;
    for (let i = 1; i <= number; i++) {
        if (divisorCounts[i] > limit) {
            totalWeight += power;
        } else {
            totalWeight += divisorCounts[i];
        }
    }
    
    return totalWeight;
}