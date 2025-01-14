function solution(prices) {
    const stack = new Array(prices.length).fill(0);
    let count = 0;
    // 가격이 떨어지지 않은 기간은 몇 초인지 리턴
    // 현재 인덱스 요소보다 다음 인덱스보다 같거나 큰 경우
    for(let i=0;i<prices.length;i++){
        // 몇 초인지 판단은 어떻게 판단?
        // 인덱스끼리 마이너스 연산(ex. i 위치에 있는 1이 i+4까지 떨어지지 않았다면 (i+4) - i)
        // console.log(prices.indexOf(prices[i],i))
        for(let j=i+1;j<prices.length;j++){
            stack[i]++;
            if(prices[i] > prices[j]) break;
        }
    }
    return stack;
}