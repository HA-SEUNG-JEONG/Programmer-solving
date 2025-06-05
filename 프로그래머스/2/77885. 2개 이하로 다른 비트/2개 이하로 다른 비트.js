function solution(numbers) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            results.push(numbers[i] + 1);
        } else {
            const binary = "0" + numbers[i].toString(2);
            const lastZero = binary.lastIndexOf("0");
            const result = binary.split("");
            result[lastZero] = "1";
            result[lastZero + 1] = "0";
            results.push(parseInt(result.join(""), 2)); // 수정된 부분
        }
    }
    return results;
}