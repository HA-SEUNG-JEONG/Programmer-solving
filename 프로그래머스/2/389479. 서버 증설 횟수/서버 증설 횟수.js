function solution(players, m, k) {
    // 표에 나와있는게 이해가 안감...
    let totalAddedServer = 0; // 리턴할 값
    let onlineServerCount = 0; // 온라인 서버 상태인 수 
    
    
    // 각 시간에 몇 대의 서버가 종료되는지에 대한 배열 초기화
    const shutdownSchedule = new Array(24+k).fill(0);
    
    for(let i=0;i<24;i++){
        // 현재 시간에 종료될 서버 있음?
        if (onlineServerCount > 0) {
            onlineServerCount -= shutdownSchedule[i];
        }
        // 현재 시간에 필요한 총 서버수 계산
        const requiredServer = Math.floor(players[i] / m);
        
        
        if(requiredServer > onlineServerCount){
            const addServer = requiredServer - onlineServerCount;
            totalAddedServer += addServer;
            onlineServerCount += addServer;
            
            const shutdownTime = i+k;
            if(shutdownTime < shutdownSchedule.length){
                shutdownSchedule[shutdownTime] += addServer;
            }
        }
        
        
    }
    return totalAddedServer
}