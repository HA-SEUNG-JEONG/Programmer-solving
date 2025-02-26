function solution(n, left, right) {
    // n행 n열 배열 만들기
//     const arr = Array.from({ length: n }, (_, row) =>
//         Array.from({ length: n }, (_, col) => Math.max(row + 1, col + 1))
//     );

//     return arr.flat().slice(left,right+1)
    
    const result = [];
    for(let i=left; i<= right; i++){
        const row = Math.floor(i / n); // 행 번호
        const col = i % n; // 열 번호
        result.push(Math.max(row+1, col+1));

    }
    return result;
}