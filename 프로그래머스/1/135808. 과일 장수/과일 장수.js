function solution(k, m, score) {
    // 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score
    const sortedScore = score.sort((a,b) => b-a);
    let maxProfit = 0;
    for(let i = m-1; i < sortedScore.length; i += m) {
        const lowestScore = sortedScore[i];
        maxProfit += lowestScore * m;
    }
    return maxProfit;
}