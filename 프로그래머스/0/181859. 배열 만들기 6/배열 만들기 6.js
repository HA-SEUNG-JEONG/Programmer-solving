function solution(arr) {
    const stk = [];
    
    for(let k=0;k<arr.length;k++){
        if(stk.length === 0){
            stk.push(arr[k]);
        }else if(stk.length !== 0 && stk.at(-1) === arr[k]){
            stk.pop(arr[k]);
        }
        else if(stk.length !== 0 && stk.at(-1) !== arr[k]){
            stk.push(arr[k]);
        }
        
    }
    return stk.length ? stk : [-1];
}