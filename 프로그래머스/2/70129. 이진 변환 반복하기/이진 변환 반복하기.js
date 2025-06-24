function solution(s) {
    // 이진 변환하기
    let count = 0; // 이진 변환의 횟수
    let zeroCount = 0; // 제거된 0의 개수
    // s가 '1'이 될때까지 s에 이진변환 가하기
    while (s !== "1") {
        // 1. s의 모든 0 제거하기
        const removedZero = s.replace(/0/g, "");
        zeroCount += s.length - removedZero.length;

        // 2. s의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
        s = removedZero.length.toString(2);

        count++;
    }
    return [count, zeroCount];
}