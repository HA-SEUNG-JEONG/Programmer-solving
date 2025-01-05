function solution(N, stages) {
    // 실패율 : 스테이지에 도달했으나 아직 클리어 못한 플레이어 수 / 스테이지에 도달한 플레이어 수 
    // 전체 스테이지 개수 : N
    // 사용자가 현재 멈춰있는 스테이지 번호가 담긴 배열 : stages
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지를 담은 배열을 반환
    
    const result = [];
    for(let i=1;i<=N;i++){
        // 전체 스테이지 수에서 클리어하지 못한 사람의 수만큼 빼기
        const reach = stages.filter(stage => stage >= i).length;
        const current = stages.filter(stage => stage === i).length;
        result.push([i,current/reach]);
    }
    result.sort((a,b) => b[1]-a[1])
    return result.map(x=>x[0])
}