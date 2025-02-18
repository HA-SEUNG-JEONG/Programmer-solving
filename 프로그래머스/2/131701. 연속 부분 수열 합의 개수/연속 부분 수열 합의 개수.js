function solution(elements) {
    // Set 이용
    // 처음부터 중복 제거 하면 안됨
//     const result = [];
//     const length = elements.length;
//     for(let i = 0; i < length; i++){
        
//     }
    const result = new Set();
    const doubleElements = [...elements, ...elements];
    
    
    const length = elements.length;
    
    for(let i = 1; i <= length; i++){
        for(let j = 0; j < length; j++){
            let sum = 0;
            for(let k = 0; k < i; k++){
                sum += doubleElements[j + k];
            }
            result.add(sum)
        }
    }
    return result.size;
}