function solution(strArr) {
    const lengthMap = new Map();

    strArr.forEach(str => {
        const len = str.length;
        if (lengthMap.has(len)) {
            lengthMap.set(len, lengthMap.get(len) + 1);
        } else {
            lengthMap.set(len, 1);
        }
    });

    return Math.max(...lengthMap.values());
}