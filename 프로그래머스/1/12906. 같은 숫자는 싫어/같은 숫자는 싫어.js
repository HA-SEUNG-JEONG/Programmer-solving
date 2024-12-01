function solution(arr)
{   
    const result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[i+1]){
            result.push(arr[i])
        }
    }
    return result;
    
    // 다른풀이  
    // return arr.filter((val,index) => val != arr[index+1]);
}