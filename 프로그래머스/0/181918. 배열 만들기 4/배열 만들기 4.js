function solution(arr) {
    let stk = [];
    // for(let i=0; i<arr.length;i++){
    //     if(arr.length === 0){
    //         stk+=arr[i];
    //         i+=1;
    //     }
    //     else if(arr.length !== 0 && stk.at(-1) < arr[i]){
    //         stk.push(arr[i]);
    //         i+=1;
    //     }
    //     else if(stk.length !== 0 && stk.at(-1)>=arr[i]){
    //         stk.pop()
    //     }
    // }
    // return stk
    
    let i = 0;
    
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
        }
        else if(stk.at(-1) < arr[i]){
            stk.push(arr[i]);
            i++;
        }
        else if(stk.at(-1)>=arr[i]){
            stk.pop()
        }
    }
    return stk;
}