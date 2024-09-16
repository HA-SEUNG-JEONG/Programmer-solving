function solution(arr, n) {
    return arr.map((value, index) => {
        if ((arr.length % 2 === 1 && index % 2 === 0) || 
            (arr.length % 2 === 0 && index % 2 === 1)) {
            return value + n;
        }
        return value;
    });
}