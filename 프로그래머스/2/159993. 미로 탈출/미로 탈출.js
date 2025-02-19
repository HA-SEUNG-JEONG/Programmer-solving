function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우

  let start, exit, lever;

  // 시작 지점(S)과 출구(E) 위치 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      if (maps[i][j] === 'L') lever = [i, j]
      if (maps[i][j] === 'E') exit = [i, j];
    }
  }
    

  const bfs = (start, end) => {
    if (start[0] === end[0] && start[1] === end[1]) return 0;
    const queue = [[...start, 0]]; // [row, col, distance]
    const visited = new Set([`${start[0]},${start[1]}`]);


    while (queue.length > 0) {
      const [row, col, dist] = queue.shift();

      if (row === end[0] && col === end[1]) {
        return dist;
      }

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        const newPos = `${newRow},${newCol}`;

        if (
          newRow >= 0 && newRow < rows &&
          newCol >= 0 && newCol < cols &&
          maps[newRow][newCol] !== 'X' &&
          !visited.has(newPos)
        ) {
          visited.add(newPos);
          queue.push([newRow, newCol, dist + 1]);
        }
      }
    }
    return -1;
  };

  // 시작 -> 레버까지의 최단 거리
  const timeToLever = bfs(start, lever);
  if (timeToLever === -1) return -1;

  // 레버 -> 출구까지의 최단 거리
  const timeToExit = bfs(lever, exit);
  if (timeToExit === -1) return -1;

  // 전체 소요 시간 = 시작->레버 + 레버->출구
  return timeToLever + timeToExit;
}