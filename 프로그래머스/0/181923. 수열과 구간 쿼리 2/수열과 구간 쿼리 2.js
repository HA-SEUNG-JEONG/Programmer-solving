function solution(arr, queries) {
    // [s,e,k]
    return queries.map(([s,e,k])=>{
        let minValue = Infinity;
        for(let i=s;i<=e;i++){
            if(arr[i] > k && arr[i] < minValue){
                minValue = arr[i];
            }
        }
        return minValue === Infinity ? -1 : minValue;
    })
}