function solution(N, stages) {
    // 전체 스테이지 개수 : N, 게임을 이용하는 사용자가 멈춰있는 스테이지 번호가 담긴 배열 stages
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열을 return
    // 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록
    // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0
    
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}