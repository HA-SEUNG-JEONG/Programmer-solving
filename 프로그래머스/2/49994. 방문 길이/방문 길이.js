function solution(dirs) {
//     const command = ['U','D','R','L'];
//     let [x,y,dx,dy]=[0,0,0,0]; // 각각 상하좌우
    
//     let answer = 0;
//     let visited = false;
    
    let [x,y]=[0,0];
    const visited = new Set();
    
    [...dirs].forEach(dir => {
        // if(dir === 'U' || dir === 'D' || dir === 'R' || dir === 'L'){
        //     // 이미 간 경로인지 확인, 길이로는 간 경로를 확인이 안될듯....
        //     // 간 경로에 대해서 기록하며 될 거 같다
        //     // if(!visited){
        //     //     answer++;
        //     //     visited = true;
        //     // }
        //     visited = true;
        //     answer++;
        //     if(visited){
        //         answer=0;
        //     }
        // } 
        let nx = x;
        let ny = y;
        
        if(dir === 'U') ny++;
        if(dir === 'D') ny--;
        if(dir === 'R') nx++;
        if(dir === 'L') nx--;
        
        // 경계 체크
        if(nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5){
            const path = `${x},${y},${nx},${ny}`;
            const reversePath = `${nx},${ny},${x},${y}`;
            
            visited.add(path);
            visited.add(reversePath);
            
            // 현재 위치 업데이트
            x = nx;
            y = ny;
        }
         
        
    });
        
    return visited.size / 2;
    
}