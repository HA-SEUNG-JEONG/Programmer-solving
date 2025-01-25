function solution(n) {
    const countOnes = (num) => num.toString(2).split('1').length - 1;
    const targetCount = countOnes(n);

    let nextNum = n + 1;
    while (countOnes(nextNum) !== targetCount) {
        nextNum++;
    }
    
    return nextNum;
}