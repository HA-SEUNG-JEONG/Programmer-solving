function solution(n, wires) {
    let answer = 100;
    
    for(let i=0; i<wires.length; i++){
        let newWires = wires.filter((_,index) => index !== i);
        let graph = new Array(n+1).fill(0).map(() => []);
        
        for(let [v1, v2] of newWires){
            graph[v1].push(v2);
            graph[v2].push(v1);
        }
        
        let visited = new Array(n + 1).fill(false);
        let queue = [1];
        visited[1] = true;
        let count = 0;

        while (queue.length > 0) {
            let node = queue.shift();
            count++;

            for (let neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }

        let otherCount = n - count;
        answer = Math.min(answer, Math.abs(count - otherCount));
    }
    return answer;
}