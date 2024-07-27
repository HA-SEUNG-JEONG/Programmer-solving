function solution(strArr) {
    return strArr.map((arr,index)=>
        index % 2 === 0 ? arr.toLowerCase() : arr.toUpperCase()
    )
}