function getGCD(a, b) {
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

function solution(arr) {
    return arr.reduce((acc, cur) => getLCM(acc, cur));
}
