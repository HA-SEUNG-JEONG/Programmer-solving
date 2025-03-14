function solution(s) {
    // 중괄호 제거
    const arr = s.slice(2,-2).split('},{');
    const sets = arr.map(el => new Set(el.split(',').map(Number)));
    sets.sort((a,b) => a.size - b.size);
    
    const result = [];
    let prevSet = new Set();
    
    for(const currentSet of sets){
        const newElement = [...currentSet].find(el => !prevSet.has(el));
        result.push(newElement);
        prevSet = currentSet;
    }
    return result;
    
}