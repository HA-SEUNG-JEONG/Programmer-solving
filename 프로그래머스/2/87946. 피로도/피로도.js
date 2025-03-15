function solution(k, dungeons) {
    // 최소 필요 피로도, 소모 피로도
    // dungeons -> [최소 필요 피로도, 소모 피로도]
    // 유저가 탐험할 수 있는 최대 던전 수를 return
    
  let dungeonCount = 0;
    const visited = new Array(dungeons.length).fill(false);

    const dfs = (k, count) => {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                dfs(k - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
        dungeonCount = Math.max(dungeonCount, count);
    };
    dfs(k, 0);
    return dungeonCount;
}