function solution(numbers) {
    const result = new Set();
    const length = numbers.length;
    
    let sum = 0;
    
    for(let i=0; i<length-1;i++){
        for(let j=i+1;j<length;j++){
            result.add(numbers[i]+numbers[j])
        }
    }
    return [...result].sort((a,b) => a-b);
}