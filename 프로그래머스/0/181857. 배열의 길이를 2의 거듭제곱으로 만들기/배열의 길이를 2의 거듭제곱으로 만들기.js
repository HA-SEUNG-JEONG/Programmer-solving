function solution(arr) {
    const length = arr.length;
    let targetLength = 1;
    
    while (targetLength < length){
        targetLength *= 2
    }
    
    return [...arr, ...Array(targetLength - length).fill(0)];
}