function solution(triangle) {
    // 아래로 이동할 때, 한칸 오른쪽 또는 한칸 왼쪽으로만 이동 가능
    const len = triangle.length;
    const dp = triangle.map(row => [...row]);
    
    for (let i = len - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
          dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
  }
  return dp[0][0];
}