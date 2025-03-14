function solution(s) {
    // 중복된 원소가 없음
    // 일단 모든 원소들을 합치기
    // 중괄호 제거
    const arr = s.slice(2,-2).split('},{');
    const sets = arr.map(el => el.split(',').map(Number));
    sets.sort((a,b) => a.length - b.length);
    
    const result = new Set();
    sets.forEach(set => {
        set.forEach(num => {
            result.add(num)
        })
    });
    return Array.from(result);
    
}