function solution(m, n, board) {
    const boards = board.map((row) => row.split(""));
    let removedCount = 0; // 지워진 블록의 개수
    // 블록 제거 및 재배치 루프
    while (true) {
        const removeBlocks = new Set();
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = boards[i][j];
                if (block === " ") continue;
                if (
                    block === boards[i][j + 1] &&
                    block === boards[i + 1][j] &&
                    block === boards[i + 1][j + 1]
                ) {
                    removeBlocks.add(`${i},${j}`);
                    removeBlocks.add(`${i},${j + 1}`);
                    removeBlocks.add(`${i + 1},${j}`);
                    removeBlocks.add(`${i + 1},${j + 1}`);
                }
            }
        }
        console.log(removeBlocks);
        if (removeBlocks.size === 0) break;
        removedCount += removeBlocks.size;
        for (const block of removeBlocks) {
            const [i, j] = block.split(",").map(Number);
            boards[i][j] = " ";
        }
        for (let j = 0; j < n; j++) {
            // 각 열에 대해
            // 아래에서 위로 순회
            for (let i = m - 1; i >= 0; i--) {
                if (boards[i][j] === " ") {
                    // 빈 칸을 찾으면
                    // 현재 위치 위로 가장 가까운 블록 찾기
                    let k = i - 1;
                    while (k >= 0 && boards[k][j] === " ") {
                        k--;
                    }
                    if (k >= 0) {
                        // 블록을 찾았으면
                        // 블록을 아래로 내림
                        boards[i][j] = boards[k][j];
                        boards[k][j] = " ";
                    }
                }
            }
        }
    }
    return removedCount;
}