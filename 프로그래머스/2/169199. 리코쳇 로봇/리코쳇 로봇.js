function solution(board) {
    // 상하좌우를 나타내는 플래그 필요
    // 최소 움직임은 7번
    
    const rows = board.length;
    const cols = board[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [
        [0, 1], // 오른쪽
        [1, 0], // 아래
        [0, -1], // 왼쪽
        [-1, 0] // 위
    ];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === "R") {
                const queue = [[i, j, 0]];
                visited[i][j] = true;

                while (queue.length > 0) {
                    const [x, y, dist] = queue.shift();

                    if (board[x][y] === "G") {
                        return dist;
                    }

                    for (const [dx, dy] of directions) {
                        let nx = x + dx;
                        let ny = y + dy;

                        while (
                            nx >= 0 &&
                            nx < rows &&
                            ny >= 0 &&
                            ny < cols &&
                            board[nx][ny] !== "D"
                        ) {
                            nx += dx;
                            ny += dy;
                        }

                        nx -= dx;
                        ny -= dy;

                        if (!visited[nx][ny]) {
                            visited[nx][ny] = true;
                            queue.push([nx, ny, dist + 1]);
                        }
                    }
                }
            }
        }
    }
    return -1;
}