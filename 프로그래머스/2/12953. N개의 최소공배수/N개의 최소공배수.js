const getGCD = (num1,num2) => {
        let gcd = 1;
        for(let i=2; i<=Math.min(num1, num2); i++){
            if(num1 % i === 0 && num2 % i === 0){
                gcd = i;
            }
        }
        return gcd;
    }

function solution(arr) {
    return arr.reduce((acc,cur) => acc * cur / getGCD(acc,cur));
}