function solution(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let [x, y, di] = [0, 0, 0];

    for (let i = 1; i <= n * n; i++) {
        result[x][y] = i;
        let [nx, ny] = [x + directions[di][0], y + directions[di][1]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || result[nx][ny] !== 0) {
            di = (di + 1) % 4;
            [nx, ny] = [x + directions[di][0], y + directions[di][1]];
        }
        [x, y] = [nx, ny];
    }

    return result;

}