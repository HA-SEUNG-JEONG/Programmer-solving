function solution(n, k) {
    const result = [];
    // n개의 숫자로 순열을 만들 때, 맨 앞에 특정 숫자가 오는 경우의 수는(n-1)!
    // k를 (n-1)!로 나누면 k번째 순열의 첫번째 숫자 추론 가능
    
    const numbers = Array.from({ length : n}, (_,i) => i+1);
    
    const factorial = (num) => {
        let result = 1;
        for(let i=2; i<=num; i++) {
            result *= i;
        }
        return result;
    }
    
    k--;
    
    while(numbers.length > 0) {
        const caseSize = factorial(numbers.length - 1);
        
        const index = Math.floor(k / caseSize);
        result.push(numbers[index]);
        numbers.splice(index,1)
        
        k%= caseSize
    }
    
    return result;
}