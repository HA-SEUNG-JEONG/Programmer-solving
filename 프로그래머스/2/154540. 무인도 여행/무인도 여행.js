function solution(maps) {
    // 상하좌우로 움직이면서
    // 현재 위치가 숫자면 합치고 X면 처음으로 돌아가서 다른 방향으로 탐색?
    const rows = maps.length;
    const cols = maps[0].length;
    
    const result = []
    
    const visited = Array.from({ length : rows}, () => Array(cols).fill(false));
    
    const answer = [];
    
    const dfs = (r,c) => {
        if(r < 0 || r >= rows || c < 0 || c >= cols || maps[r][c] === "X" || visited[r][c]) return 0;
        
        visited[r][c] = true;
        
        let currentSum = parseInt(maps[r][c],10);
        currentSum += dfs(r-1,c)
        currentSum += dfs(r+1,c)
        currentSum += dfs(r,c-1)
        currentSum += dfs(r,c+1);
        
        return currentSum;
    }
    
    for(let r=0; r < rows;r++){
        for(let c=0; c < cols;c++){
            if(maps[r][c] !== 'X' && !visited[r][c]){
                const isLadSum = dfs(r,c);
                result.push(isLadSum)
            }
        }
    }
    
    if(result.length === 0) return [-1];
    return result.sort((a,b) => a-b)
}