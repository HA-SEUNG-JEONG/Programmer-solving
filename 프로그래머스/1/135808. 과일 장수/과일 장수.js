function solution(k, m, score) {
    // 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score
    const counts = new Array(k + 1).fill(0);
    // 점수별 개수 카운팅
    for (const s of score) {
        counts[s]++;
    }
    
    let maxProfit = 0;
    let currentBox = 0;
    let remainingSlots = m;
    
    // 높은 점수부터 처리
    for (let i = k; i >= 1; i--) {
        while (counts[i] > 0) {
            counts[i]--;
            remainingSlots--;
            
            if (remainingSlots === 0) {
                maxProfit += i * m;
                remainingSlots = m;
            }
        }
    }
    
    return maxProfit;
}