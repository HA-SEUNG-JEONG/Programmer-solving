function solution(n, computers) {
    // 컴퓨터 개수 n
    // 연결에 대한 정보가 담긴 2차원 배열 computers
    // 네트워크의 개수를 리턴
    
    // computer[0][0], computer[1][1]... 은 항상 1
    
    let result = 0;
    let visited = new Array(n).fill(false);
    
    const dfs = (node) => {
        visited[node] = true;
        for(let i=0; i < n; i++){
            if(computers[node][i] === 1 && !visited[i]){
                dfs(i)
            }
        }
    };
    
     for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            result++;
        }
    }
    return result;
    
}