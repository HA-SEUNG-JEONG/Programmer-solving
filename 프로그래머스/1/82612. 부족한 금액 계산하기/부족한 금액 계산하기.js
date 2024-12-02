function solution(price, money, count) {
    // 놀이기구를 N번째 이용한다면 원래 이용료의 N배를 받기로 함
    // 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상
    
    // 놀이기구를 count만큼 타게 되면 현재 가진 금액에서 '얼마가 모자라는지' return
    
    let result = 0;
    for(let i=1; i<=count;i++){
        result += price * i;
    }
    
    return result - money > 0 ? result - money : 0;
}