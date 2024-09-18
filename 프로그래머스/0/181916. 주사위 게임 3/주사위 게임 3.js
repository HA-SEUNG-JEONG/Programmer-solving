function solution(a, b, c, d) {
    const numbers = [a, b, c, d];
    const count = {};
    numbers.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    
    const uniqueCount = Object.keys(count).length;
    
    if (uniqueCount === 1) {
        // 모든 주사위가 같은 경우
        return 1111 * numbers[0];
    } else if (uniqueCount === 2) {
        const values = Object.values(count);
        if (values.includes(3)) {
            // 3개가 같고 1개가 다른 경우
            const p = Number(Object.keys(count).find(key => count[key] === 3));
            const q = Number(Object.keys(count).find(key => count[key] === 1));
            return Math.pow(10 * p + q, 2);
        } else {
            // 2개씩 같은 경우
            const [p, q] = Object.keys(count).map(Number);
            return (p + q) * Math.abs(p - q);
        }
    } else if (uniqueCount === 3) {
        // 2개가 같고 나머지 2개가 다른 경우
        const p = Number(Object.keys(count).find(key => count[key] === 2));
        const [q, r] = Object.keys(count).filter(key => count[key] === 1).map(Number);
        return q * r;
    } else {
        // 모든 주사위가 다른 경우
        return Math.min(...numbers);
    }

    // 다른 풀이
//     if (a === b && a === c && a === d) return 1111 * a

//     if (a === b && a === c) return (10 * a + d) ** 2
//     if (a === b && a === d) return (10 * a + c) ** 2
//     if (a === c && a === d) return (10 * a + b) ** 2
//     if (b === c && b === d) return (10 * b + a) ** 2

//     if (a === b && c === d) return (a + c) * Math.abs(a - c)
//     if (a === c && b === d) return (a + b) * Math.abs(a - b)
//     if (a === d && b === c) return (a + b) * Math.abs(a - b)

//     if (a === b) return c * d
//     if (a === c) return b * d
//     if (a === d) return b * c
//     if (b === c) return a * d
//     if (b === d) return a * c
//     if (c === d) return a * b

//     return Math.min(a, b, c, d)
}