function solution(storey) {
    let answer = 0;
    while (storey > 0) {
        const digit = storey % 10;
        if (digit > 5) {
            answer += 10 - digit;
            storey = Math.floor(storey / 10) + 1; // 올림
        } else if (digit < 5) {
            answer += digit;
            storey = Math.floor(storey / 10); // 내림
        } else { // digit === 5
            // 다음 자릿수(10의 자리)가 5 이상이면 올림, 아니면 내림
            const next = Math.floor(storey / 10) % 10;
            if (next >= 5) {
                answer += 10 - digit;
                storey = Math.floor(storey / 10) + 1;
            } else {
                answer += digit;
                storey = Math.floor(storey / 10);
            }
        }
    }
    return answer;
}
