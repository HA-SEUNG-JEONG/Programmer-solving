function solution(n) {
    // 3번마다 반복?
    const numbers = ["4", "1", "2"];

    let result = "";
    while (n > 0) {
        result = numbers[n % 3] + result;
        n = Math.floor((n - 1) / 3);
    }
    return result;
}