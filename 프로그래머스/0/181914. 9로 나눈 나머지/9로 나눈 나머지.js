function solution(number) {
    return number.split('').reduce((acc,cur) => Number(acc)+Number(cur)) % 9;
}