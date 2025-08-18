function solution(land) {
    const n = land.length;
    for(let i=1; i<n; i++) {
        for(let j=0; j<4; j++) {
            // 같은 열을 제외한 이전 행 중 Max값 직접 찾기
            let max = 0;
            for(let k=0; k<4; k++) {
                if(k !== j) max = Math.max(max, land[i-1][k]);
            }
            land[i][j] += max;
        }
    }
    return Math.max(...land[n-1]);
}
