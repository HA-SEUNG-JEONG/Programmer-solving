function solution(n)
{
    // (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동
    // 순간이동을 하면 건전지 사용량이 줄지 않지만, 앞으로 K 칸을 점프하면 K 만큼의 건전지 사용량이 듭니다
    // 사용해야 하는 건전지 사용량의 최솟값을 리턴
    let fuelCount = 0;
    
//     for(let i=0;i<=n;i++){
//         // 점프랑 순간이동 구분
//         // 점프를 최소화 순간이동을 더 많이 해야 함
//         // 순간이동을 하는 경우에는 현재까지 온 거리의 2배만큼 순간이동
//         // 일단 모든 경우의 수를 나열?
        
//     }
    
    // return을 어떤식으로...? Math.min..? 걍 fuelCount로?
    
    // while(n > 0){
    //     if(n % 2 === 1){
    //         fuelCount++;
    //         n--;
    //     }
    //     n /=2;
    // }
    // return fuelCount;
    return n.toString(2).split('1').length - 1;
}