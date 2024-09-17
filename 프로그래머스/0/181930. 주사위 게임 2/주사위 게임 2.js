function solution(a, b, c) {
    const sum = a + b + c;
    const squareSum = Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2);
    const cubeSum = Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)
     if (a !== b && b !== c && a !== c) {
        return sum;
    } else if (a === b && b === c) {
        return sum * squareSum * cubeSum;
    } else {
        return sum * squareSum;
    }
}