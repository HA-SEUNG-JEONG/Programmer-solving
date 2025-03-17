function solution(topping) {
    const rightCount = {};
    let rightKinds = 0;
    let leftKinds = 0;
    let result = 0;

    for (const t of topping) {
        if (!rightCount[t]) {
            rightCount[t] = 0;
            rightKinds++;
        }
        rightCount[t]++;
    }

    const leftCount = {};
    
    for (const t of topping) {
        if (!leftCount[t]) {
            leftCount[t] = 0;
            leftKinds++;
        }
        leftCount[t]++;

        rightCount[t]--;
        if (rightCount[t] === 0) rightKinds--;

        if (leftKinds === rightKinds) result++;
    }

    return result;
}