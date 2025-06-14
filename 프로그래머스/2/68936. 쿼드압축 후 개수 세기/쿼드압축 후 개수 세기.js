function solution(arr) {
    // 최종 배열에서 0과 1의 개수를 각각 배열에 담아서 리턴
    // 0과 1의 개수를 세야 함
    // let zeroCount = 0;
    // let oneCount = 0;
    const result = [0, 0];
    
    const memo = new Map();
    
    const getKey = (x,y,size) => `${x},${y},${size}`

    const compress = (x, y, size) => {
        const first = arr[x][y];
        const key = getKey(x,y,size);
        if (memo.has(key)) {
            const [zeros, ones] = memo.get(key);
            result[0] += zeros;
            result[1] += ones;
            return;
        }
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
            memo.set(key, first === 0 ? [1, 0] : [0, 1]);
            return;
        }

        const half = size / 2;
        const subResults = [[0, 0], [0, 0], [0, 0], [0, 0]];
        
        compress(x, y, half);
        compress(x, y + half, half);
        compress(x + half, y, half);
        compress(x + half, y + half, half);
        
        const totalZeros = subResults.reduce((sum, [z, _]) => sum + z, 0);
    const totalOnes = subResults.reduce((sum, [_, o]) => sum + o, 0);
    memo.set(key, [totalZeros, totalOnes]);
    };
    compress(0, 0, arr.length);
    return result;
}
