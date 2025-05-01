function solution(numbers) {
    const n = numbers.length;
    const arr = new Array(n).fill(-1);
    const stack = [];
    
    for(let i=0;i<n;i++){
        while(stack.length > 0 && numbers[stack[stack.length-1]] < numbers[i]) {
            arr[stack.pop()] = numbers[i];
        }
        stack.push(i)
    }
    return arr;
}