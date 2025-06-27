function solution(arrayA, arrayB) {
    // 두 수의 최대공약수(GCD)를 구하는 함수
    const getGCD = (a, b) => {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    };

    // 배열의 모든 수의 최대공약수를 구하는 함수
    const getArrayGCD = (arr) => {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = getGCD(result, arr[i]);
            if (result === 1) break; // 1이면 더 이상 진행할 필요 없음
        }
        return result;
    };

    // 조건을 만족하는지 확인하는 함수
    const isValid = (gcd, arr) => {
        // gcd가 1이면 조건을 만족할 수 없음
        if (gcd === 1) return false;
        // arr의 모든 원소가 gcd로 나누어지지 않는지 확인
        return arr.every((num) => num % gcd !== 0);
    };

    const gcdA = getArrayGCD(arrayA);
    const gcdB = getArrayGCD(arrayB);

    const case1 = isValid(gcdA, arrayB) ? gcdA : 0;
    const case2 = isValid(gcdB, arrayA) ? gcdB : 0;

    return Math.max(case1, case2);
}
