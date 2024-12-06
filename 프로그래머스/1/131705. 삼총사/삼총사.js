function solution(number) {
    // 해시 테이블
    let count = 0;
    const n = number.length;
    
    // 조합을 찾는 재귀 함수
    function findCombination(current, start, sum) {
        if (current === 3) {
            if (sum === 0) {
                count++;
            }
            return;
        }
        
        for (let i = start; i < n; i++) {
            findCombination(current + 1, i + 1, sum + number[i]);
        }
    }
    
    findCombination(0, 0, 0);
    return count;
}