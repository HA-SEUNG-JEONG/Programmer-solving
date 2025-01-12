function solution(park, routes) {
    // 시작 위치 찾기
    let x = 0;
    let y = 0;
    
    // 시작점 S 찾기
    for(let i = 0; i < park.length; i++) {
        if(park[i].includes('S')) {
            x = i;
            y = park[i].indexOf('S');
        }
    }
    
    // 이동 명령 실행
    routes.forEach(route => {
        const [dir, dist] = route.split(' ');
        let nx = x;  // 새로운 x 좌표
        let ny = y;  // 새로운 y 좌표
        let canMove = true;
        
        // 거리만큼 한칸씩 이동하면서 체크
        for(let i = 0; i < Number(dist); i++) {
            if(dir === 'N') nx--;
            if(dir === 'S') nx++;
            if(dir === 'W') ny--;
            if(dir === 'E') ny++;
            
            // 공원을 벗어나거나 장애물을 만나면 이동 불가
            if(nx < 0 || ny < 0 || nx >= park.length || ny >= park[0].length || park[nx][ny] === 'X') {
                canMove = false;
                break;
            }
        }
        
        // 이동이 가능한 경우에만 위치 업데이트
        if(canMove) {
            x = nx;
            y = ny;
        }
    });
    
    return [x, y];
}
