function solution(intStrs, k, s, l) {
    return intStrs.map(str => {
        const num = Number(str.slice(s,s+l));
        return num > k ? num : null;
    }).filter(num=>num !== null)
}