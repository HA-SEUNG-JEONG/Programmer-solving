function solution(numbers) {
    const result = numbers
        .map(String)
        .sort((a, b) => {
            // 문자열로 변환한 후 연결하여 비교
            const order1 = a + b;
            const order2 = b + a;
            return order2.localeCompare(order1);
        })
        .join("");

    // 모든 숫자가 0인 경우 처리
    return result[0] === "0" ? "0" : result;
}