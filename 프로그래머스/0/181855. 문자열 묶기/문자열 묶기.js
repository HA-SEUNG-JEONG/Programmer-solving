function solution(strArr) {
    const lengthCount = {};
    
    strArr.forEach((str) => {
        const length = str.length;
        if(lengthCount[length]) lengthCount[length]++;
        else lengthCount[length] = 1;
    });
    
    return Math.max(...Object.values(lengthCount));
}