function solution(arr) {
    const minElement = Math.min(...arr);
    // arr === [10] 으로 비교불가
    if(arr.length === 1) return [-1]
    return arr.filter(element => element !== minElement)
}