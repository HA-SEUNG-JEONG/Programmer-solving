function solution(a, b) {
    const n = a.length;
    let result = 0;
    for(let i=0; i<n; i++){
        result += a[i]*b[i]
    }
    return result;
}