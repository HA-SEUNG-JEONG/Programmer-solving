function buildTree(info, edges){
        const tree = Array.from({ length: info.length}, () => []);
        for(const [from, to] of edges){
            tree[from].push(to);
        }
        return tree;
}

function solution(info, edges) {
    // 루트 노드에는 항상 양이 있음
    // BFS 방법인가?
    // 각 노드를 방문하면서 모을 수 있는 양은 최대 몇 마리?
//     let result = 0;
//     for(let i=0; i<info.length; i++){
//         // 0과 1 판단하기
//         // 루트 노드 설정
//         if(info[i] === 0){
            
//         }
//         else if(info[i] === 1){
            
//         }
//     }
    
    const tree = buildTree(info,edges);
    // console.log(tree)
    
    let maxSheep = 0;
    
    const q = [[0,1,0,new Set()]];
    
    while(q.length > 0){
        const [current, sheepCount, wolfCount, visited] = q.pop();
        
        maxSheep = Math.max(maxSheep, sheepCount);
        
        for(const next of tree[current]){
            visited.add(next)
        }
        
        for(const next of visited){
            if(info[next]){
                if(sheepCount !== wolfCount+1){
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([next, sheepCount, wolfCount+1, newVisited])
                }
            }
            else{
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([next, sheepCount+1, wolfCount, newVisited]);
            }
        }
    }
    
    return maxSheep;
    
}