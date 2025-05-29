function solution(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
    
//     const MOD = 1000000007n;
//     let prev1 = 2n;  // dp[i-1]
//     let prev2 = 1n;  // dp[i-2]
//     let current;
    
//     for (let i = 3; i <= n; i++) {
//         current = (prev1 + prev2) % MOD;
//         prev2 = prev1;
//         prev1 = current;
//     }
    
//     return Number(current);
    const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }

  return arr[n];
}