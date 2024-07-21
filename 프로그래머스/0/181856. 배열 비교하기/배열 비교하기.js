function solution(arr1, arr2) {
   if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    
    const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
    const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);
    
    if (arr1Sum !== arr2Sum) {
        return arr1Sum > arr2Sum ? 1 : -1;
    }
    
    return 0;
}