// ➊ 이동 가능한 좌표인지 판단하는 함수
function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== 'X';
}

// ➋ 방문한 적이 없으면 큐에 넣고 방문 여부 표시
function appendToQueue(ny, nx, k, time, visited, queue) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    queue.push([ny, nx, k, time + 1]);
  }
}

function createQueue() {
  const queue = [];
  return {
    push(item) {
      queue.push(item);
    },
    pop() {
      return queue.shift();
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));

  // ➍ 위, 아래, 왼쪽, 오른쪽 이동 방향
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = createQueue();
  let endY = -1;
  let endX = -1;

  // ➎ 시작점과 도착점을 찾아 큐에 넣고 방문 여부 표시
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') { // 시작점
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }
      if (maps[i][j] === 'E') { // 도착점
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop(); // ➏ 큐에서 좌표와 이동 횟수를 꺼냄

    // ➐ 도착점에 도달하면 결과 반환
    if (y === endY && x === endX && k === 1) {
      return time;
    }

    // ➑ 네 방향으로 이동
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // ➒ 이동 가능한 좌표인 때에만 큐에 넣음
      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      // ➓ 다음 이동 지점이 물인 경우
      if (maps[ny][nx] === 'L') {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else { // ⓫ 다음 이동 지점이 물이 아닌 경우
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }
  // ⓬ 도착점에 도달하지 못한 경우
  return -1;
}
