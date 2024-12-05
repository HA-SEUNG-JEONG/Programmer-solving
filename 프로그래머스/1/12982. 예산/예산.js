function solution(d, budget) {
    // d : 부서별로 신청한 금액이 들어있는 배열 
    // budget : 예산
    // 최대 몇 개의 부서에 물품을 지원할 수 있는지 return
    
    let result = 0;
    d.sort((a,b) => a-b);
    
    // d 배열 중에서 n개를 골라서 그 합이 budget보다 작아야 함
    
    for(let amount of d){
        if(budget >= amount){
            budget -= amount;
            result++;
        }else{
            break;
        }
    }
    return result;
}