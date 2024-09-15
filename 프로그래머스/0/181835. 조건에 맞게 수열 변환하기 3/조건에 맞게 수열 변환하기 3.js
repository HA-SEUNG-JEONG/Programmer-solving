function solution(arr, k) {
    return arr.map(num => k % 2 === 1 ? num * k : num + k);
    // const result =arr.map(list => {
    //     if(k % 2 === 1){
    //         list = list * k;
    //     }else if(k % 2 === 0){
    //         list = list + k;
    //     }
    //     return list;
    // })
    // return result;
}