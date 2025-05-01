function isPrime(num) { 
    if (num <= 1) return false;
    for (let i=2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    // 1. n을 k진수로 변환하기
    // 2. 변환된 수를 이용해서 소수 구하기
    
    const kBase = n.toString(k);
    const candidates = kBase.split('0').filter(x => x !== '').map(Number)
    return candidates.filter(isPrime).length;
}