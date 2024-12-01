function solution(n) {
    return Array(n).fill().map((_,i) => i % 2 === 0 ? '수' : '박').join('')
}