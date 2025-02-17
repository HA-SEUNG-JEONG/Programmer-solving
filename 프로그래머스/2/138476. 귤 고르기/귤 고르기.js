function solution(k, tangerine) {
    // 정렬을 해야하나..?
//     let count = 0;
//     // k개가 되면 끝내기
//     // Set을 써보자... 
//     tangerine.forEach((tan) => {
        
//     })
    
    const countMap = new Map();
    tangerine.forEach(tan => {
        countMap.set(tan, (countMap.get(tan) || 0) + 1);
    });
      const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);
    
    let sum = 0;
    let result = 0;
    
    for(const count of sortedCounts){
        sum += count;
        result++;
        if(sum >= k) break;
    }
    return result;
}