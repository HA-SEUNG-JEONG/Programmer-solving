function dfs(curK, cnt, dungeons, visited){
    let maxAnswer = cnt;
    for(let i=0; i<dungeons.length;i++){
        if(curK >= dungeons[i][0] && visited[i] === 0){
            visited[i] = 1;
            maxAnswer = Math.max(maxAnswer, dfs(curK-dungeons[i][1],cnt+1,dungeons,visited));
            visited[i] = 0;
        }
    }
    return maxAnswer
}

function solution(k, dungeons) {
    // k - 현재 피로도, dungeons - ['최소 필요 피로도', '소모 피로도'];
    const visited = Array(dungeons.length).fill(0);
    const maxAnswer = dfs(k,0,dungeons,visited);
    return maxAnswer;
    
}