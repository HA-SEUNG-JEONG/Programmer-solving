function solution(arr, queries) {
    for (const q in queries) {
        const [s, e] = queries[q];
        for (let i = s; i <= e; i++) {
            arr[i]++;
        }
    }
    return arr;
}