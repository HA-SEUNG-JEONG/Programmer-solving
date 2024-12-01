function solution(a, b) {
    const n = a.length;
    let result = 0;
    for(let i=0; i<n; i++){
        result += a[i]*b[i]
    }
    return result;
    // reduce로 하는 방법
    // return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}