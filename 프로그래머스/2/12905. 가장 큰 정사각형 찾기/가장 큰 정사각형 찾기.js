function solution(board) {
    const row = board.length;
    const col = board[0].length;
    const dp = Array.from(Array(row), ()=> Array(col).fill(0));
    let maxLength = 0;

    for(let i=0; i < row; i++) {
      for(let j=0; j < col; j++) {
        if(i === 0 || j === 0) {
          dp[i][j] = board[i][j];
        } else if(board[i][j] === 1) {
          dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
        } else {
          dp[i][j] = 0;
        }
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }

    return maxLength * maxLength;
}