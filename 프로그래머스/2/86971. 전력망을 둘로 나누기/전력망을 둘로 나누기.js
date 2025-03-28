function solution(n, wires) {
    let answer = n;
    
    // 그래프 초기화
    const graph = new Array(n + 1).fill(0).map(() => []);
    for(const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    // 각 전선을 하나씩 제거하면서 시도
    for(let i = 0; i < wires.length; i++) {
        const [v1, v2] = wires[i];
        
        // 전선 제거
        graph[v1] = graph[v1].filter(v => v !== v2);
        graph[v2] = graph[v2].filter(v => v !== v1);
        
        // BFS로 연결된 노드 개수 계산
        const visited = new Array(n + 1).fill(false);
        const queue = [1];
        visited[1] = true;
        let count = 0;
        
        while(queue.length > 0) {
            const node = queue.shift();
            count++;
            
            for(const next of graph[node]) {
                if(!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
        
        answer = Math.min(answer, Math.abs(count - (n - count)));
        
        // 전선 복구
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    return answer;
}