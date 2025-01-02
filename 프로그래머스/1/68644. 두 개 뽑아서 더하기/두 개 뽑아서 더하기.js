function solution(numbers) {
    const set = new Set();
    const length = numbers.length
    for(let i=0;i<length-1;i++){
        for(let j=i+1;j<length;j++){
            set.add(numbers[i]+numbers[j]);
        }
    }
    return [...set].sort((a,b) => a-b)
}