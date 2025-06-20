function solution(n) {
const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

    let num = 1;
    let x = -1,
        y = 0;

    // 방향: 아래 → 오른쪽 → 대각선 위
    const directions = [
        [1, 0], // 아래
        [0, 1], // 오른쪽
        [-1, -1] // 대각선 왼쪽 위
    ];

    let dir = 0; // 현재 방향
    let steps = n; // 현재 방향으로 이동할 칸 수

    while (steps > 0) {
        const [dx, dy] = directions[dir % 3];

        for (let i = 0; i < steps; i++) {
            x += dx;
            y += dy;
            triangle[x][y] = num++;
        }

        dir = (dir + 1) % 3;
        steps--;
    }

    // 삼각형을 1차원 배열로 변환
    return triangle.flat();
    
}