function solution(A,B){
    // A에서는 최솟값, B에서는 최댓값?
    let result = 0;
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a)

    for(let i=0;i<A.length;i++){
        result += A[i] * B[i];
    }
    
    return result;
    
}