function solution(arr, k) {
    return arr.map(num => k % 2 === 1 ? num * k : num + k);
}