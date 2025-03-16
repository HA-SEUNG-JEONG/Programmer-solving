function solution(maps) {
    // 동,서,남,북으로 이동
    const [start, end] = [maps.length, maps[0].length];

    const queue = [[0, 0]];
    const visited = Array.from({ length: start }, () => Array(end).fill(false));
    visited[0][0] = true; // 방문 처리

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    // 큐가 빌 때까지 반복

    while (queue.length > 0) {
        // 큐에서 현재 위치 꺼내기
        const [x, y] = queue.shift();
        // 현재 위치가 목적지인지 확인
        if (x === start - 1 && y === end - 1) {
            return maps[x][y];
        }
        // 상하좌우 탐색
        for (let i = 0; i < 4; i++) {
            // 상하좌우 네 방향으로 이동 가능한지 확인
            // 이동 가능하면 해당 위치를 큐에 추가하고 거리 업데이트
            const nx = x + dx[i];
            const ny = y + dy[i];
            // 맵을 벗어나지 않고, 벽이 아니며, 방문하지 않은 위치인 경우
            if (
                nx >= 0 &&
                nx < start &&
                ny >= 0 &&
                ny < end &&
                maps[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                // 방문 처리
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                maps[nx][ny] = maps[x][y] + 1;
            }
        }
    }
    // 목적지에 도달할 수 없는 경우 -1 반환
    return -1;
}