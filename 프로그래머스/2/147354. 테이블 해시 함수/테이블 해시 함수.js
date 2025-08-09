function solution(data, col, row_begin, row_end) {
    let answer = 0;

    const sorted = data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0];
        }
        return a[col - 1] - b[col - 1];
    });

    for (let i = row_begin; i <= row_end; i++) {
        const sum = sorted[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
        answer ^= sum;
    }
    return answer;
}