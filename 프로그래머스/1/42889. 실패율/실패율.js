function solution(N, stages) {
    // 실패율 : 스테이지에 도달했으나 아직 클리어 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    
    // 전체 스테이지 개수 : N
    // 사용자가 현재 멈춰있는 스테이지 번호가 담긴 배열 : stages
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지를 담은 배열을 반환

    // 0부터 N+1까지 데이터를 넣으려면 N+2만큼 길이가 필요함
    const challenger = new Array(N+2).fill(0);
    
    for(const stage of stages){
        challenger[stage]++;
    }
    
    const fails = {};
    let total = stages.length;
    
    for(let i=1; i<=N; i++){
        if(challenger[i] === 0) {
            fails[i]=0;
            continue;
        }
        
        fails[i] = challenger[i] / total;
        
        total -= challenger[i];
    }
    
    return Object.entries(fails).sort((a,b) => b[1] - a[1]).map(v => Number(v[0]))
}