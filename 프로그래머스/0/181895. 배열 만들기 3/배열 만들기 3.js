function solution(arr, intervals) {
    const [[a,b],[c,d]]=intervals;

    const firstInterval = arr.slice(a, b + 1);
    const secondInterval = arr.slice(c, d + 1);
    
    return [...firstInterval, ...secondInterval];
}
