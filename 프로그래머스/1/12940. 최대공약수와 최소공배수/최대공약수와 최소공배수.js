function solution(n, m) {
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const lcm = (a, b) => (a * b) / gcd(a, b);

    const greatestCommonDivisor = gcd(n, m);
    const leastCommonMultiple = lcm(n, m);

    return [greatestCommonDivisor, leastCommonMultiple];
}