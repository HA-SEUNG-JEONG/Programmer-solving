function solution(arr, idx) {
    return arr.findIndex((value, index) => index >= idx && value === 1);
}