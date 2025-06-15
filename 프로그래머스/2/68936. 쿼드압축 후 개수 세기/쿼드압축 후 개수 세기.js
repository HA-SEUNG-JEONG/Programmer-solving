function solution(arr) {
    // 최종 배열에서 0과 1의 개수를 각각 배열에 담아서 리턴
    // 0과 1의 개수를 세야 함
    // let zeroCount = 0;
    // let oneCount = 0;
    const result = [0, 0];

    const compress = (x, y, size) => {
        const first = arr[x][y];
        let isSame = true;

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== first) {
                    isSame = false;
                    break;
                }
            }
            if (!isSame) break;
        }

        if (isSame) {
            result[first]++;
            return;
        }

        const half = size / 2;
        compress(x, y, half);
        compress(x, y + half, half);
        compress(x + half, y, half);
        compress(x + half, y + half, half);
    };
    // arr를 순회
    compress(0, 0, arr.length);
    return result;
}
