function solution(strs, t) {
  const n = t.length;
  const dp = Array.from({ length: n + 1 }, () => Infinity);
  
  dp[0] = 0;
  
  for(let i = 0; i < n; i++){
      if(dp[i] === Infinity) continue;
      for(let j = 0;j < strs.length; j++){
          if(i + strs[j].length <= n && t.slice(i,i+strs[j].length) === strs[j]) {
              dp[i + strs[j].length] = Math.min(dp[i + strs[j].length], dp[i] + 1);
          }
      }
  }
  return dp[n] === Infinity ? -1 : dp[n];
}