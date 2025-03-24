function solution(board) {
    // 설계 도면 각 격자의 칸은 0(비어 있음) 또는 1(벽으로 채워져 있음)
    // 출발점은 (0,0), 도착점은 (N-1, N-1)
    // 상 하 좌 우로 이동
    // 직선 도로 하나를 만들 때는 100원이 소요되며, 코너를 하나 만들 때는 500원이 추가로 듭니다.
    // 상 or 하 -> 좌 or 우 / 좌 or 우 -> 상 or 하 일때 코너 발생
    // 코너를 최소로 발생시켜야 최소 비용이 나올듯
    const N = board.length;
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    
    const costs = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(4).fill(Infinity)));
    
    for(let i=0;i<4;i++){
        costs[0][0][i]  = 0;
    }
    
    const queue = [[0,0,-1,0]];
    
    while(queue.length > 0){
        const [x,y,prevDirection,cost] = queue.shift();
        
        for(let i=0;i<4;i++){
            const [dx,dy] = directions[i];
            const newX = x+dx;
            const newY = y+dy;
            
            if(newX<0 || newX>=N || newY<0 || newY>=N || board[newX][newY] === 1) continue;
            
            let newCost = cost + 100;
            if(prevDirection !== -1 && prevDirection !== i) newCost+=500;
            
            if (newCost < costs[newX][newY][i]) {
                costs[newX][newY][i] = newCost;
                queue.push([newX, newY, i, newCost]);
            }
        }
    }
    return Math.min(...costs[N-1][N-1])
    
}