function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우

    // 1. 시작 위치 'R' 찾기
    let startX, startY;
    for (let i = 0; i < rows; i++) {
        const j = board[i].indexOf('R');
        if (j !== -1) {
            startX = i;
            startY = j;
            break;
        }
    }
    // 2. BFS 탐색 준비
    const queue = [[startX, startY, 0]];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[startX][startY] = true;
    
    let head = 0; // queue.shift() 대신 사용할 인덱스 (성능 최적화)

    // 3. BFS 탐색 시작
    while (head < queue.length) {
        const [x, y, dist] = queue[head++]; // shift() 보다 빠름

        // 목표 위치 'G'에 도달하면 거리 반환
        if (board[x][y] === 'G') {
            return dist;
        }

        // 4. 상하좌우 네 방향으로 미끄러지기
        for (const [dx, dy] of directions) {
            let nx = x;
            let ny = y;

            // 다음 위치가 보드 안이고 장애물이 아닐 때까지 계속 이동
            while (
                nx + dx >= 0 && nx + dx < rows &&
                ny + dy >= 0 && ny + dy < cols &&
                board[nx + dx][ny + dy] !== 'D'
            ) {
                nx += dx;
                ny += dy;
            }
            

            // 멈춘 위치가 아직 방문하지 않은 곳이라면 큐에 추가
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    // 목표에 도달할 수 없는 경우
    return -1;
}