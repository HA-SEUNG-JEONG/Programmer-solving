function solution(arr) {
    return arr.reduce((acc, cur) => acc.concat(Array(cur).fill(cur)), []);
}