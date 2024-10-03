function solution(rank, attendance) {

    let selected = [];

    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            selected.push([rank[i], i]);
        }
    }
    selected.sort((a, b) => a[0] - b[0]);

    const a = selected[0][1];
    const b = selected[1][1];
    const c = selected[2][1];

    return 10000 * a + 100 * b + c;
}