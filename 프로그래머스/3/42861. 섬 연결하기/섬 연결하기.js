function find(parent, i) {
    if(parent[i] === i) return i;
    
    parent[i] = find(parent, parent[i]);
    return parent[i]
}

function union(parent, rank, x, y) {
    const xRoot = find(parent, x);
    const yRoot = find(parent, y);
    
    if(rank[xRoot] < rank[yRoot]) {
        parent[xRoot] = yRoot;
    } else if(rank[xRoot] > rank[yRoot]) {
        parent[yRoot] = xRoot;
    } else {
        parent[yRoot] = xRoot;
        rank[xRoot] += 1;
    }
}


function solution(n, costs) {
//     // 순서가 바뀌어도 같은 연결로 간주
//     // 최소가 되는 경로에 대해 다리 건설 비용을 합산해서 리턴
//     for(let i=0; i<costs.length;i++){
//         const first = costs[i][0];
//         const second = costs[i][1];
//         const middle = costs[i][2];
//     }
//     // 플래그가 필요할까...?
//     let visited = false;
    
//     // 모든 섬이 통행 가능하도록 만들려면...?
    
    // 각 섬 사이의 다리를 건설하는 비용을 오름차순으로 정렬
    // 바용이 작은 다리부터 선택해서 섬을 연결
    // N개의 섬을 연결하려면 N-1개의 다리가 필요하므로 N-1개의 다리가 선택될 때까지 위 두 과정을 반복
    
    // 사이클 여부를 알아내야 함
    
    costs.sort((a,b) => a[2] - b[2]); // 건설 비용 순으로 정렬
    const parent = Array.from({ length : n}, (_, i) => i);
    const rank = Array(n).fill(0);
    
    let minCost = 0;
    let edges = 0;
    
    for(const edge of costs){
        if(edges === n-1){
            break;
        }
        
        const x = find(parent, edge[0]);
        const y = find(parent, edge[1]);
        
        if(x !== y) {
            union(parent, rank, x, y);
            minCost += edge[2];
            edges += 1;
        }
    }
    
    return minCost;
    
  
    
}