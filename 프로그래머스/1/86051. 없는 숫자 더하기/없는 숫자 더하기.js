function solution(numbers) {
    // 0~9까지 들어있는 모든 숫자의 합 : 45
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}