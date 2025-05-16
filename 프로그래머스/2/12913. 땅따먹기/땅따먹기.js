function solution(land) {
  for (let currentRow = 1; currentRow < land.length; currentRow++) {
    for (let currentCol = 0; currentCol < 4; currentCol++) {
      let maxPrevScore = 0;
      for (let prevCol = 0; prevCol < 4; prevCol++) {
        if (prevCol !== currentCol) {
          maxPrevScore = Math.max(maxPrevScore, land[currentRow - 1][prevCol]);
        }
      }

      land[currentRow][currentCol] += maxPrevScore;
    }
  }

  return Math.max(...land[land.length - 1]);
}