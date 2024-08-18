function solution(numbers, n) {
    return numbers.reduce((acc, curr) => {
        if (acc > n) return acc;
        return acc + curr;
    }, 0);
}