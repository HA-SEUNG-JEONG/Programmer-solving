function solution(players, callings) {
    // const result = [];
    // let count = 0;
    // const lowerPlayers = players.map(player=>player.toLowerCase());
    // const uniquePlayer = new Set(lowerPlayers);
//     for(let i=0;i<players.length;i++){
//         // players 중에서 callings로 불린 선수가 있다면 불린 횟수만큼 인덱스를 줄인다.
//         // 1등의 선수는 불리지 않음
//         // console.log(callings[i],players[i])
//         // if(callings[i] === players[i]){
//         //     console.log('s')
//         // }
//         console.log(players[i],callings[i])
        
//     }
    // const f = players.some((player,index) => player === callings[index]);
    // console.log(f)
    
//     const playerMap = {};
    
//     players.forEach((player,index) => {
//         playerMap[player] = index;
//     })
    
//     callings.forEach(calling => {
//         const currentIndex = playerMap[calling]; // callngs의 현재 위치
//         const frontPlayer = players[currentIndex - 1]; // 자기보다 앞에 있는 플레이어
        
//         // 위치 교환 
//         // 나는 callings에 불린 사람이 있으면 count를 감소시키는 것으로 생각했음..
//         players[currentIndex - 1] = calling;
//         players[currentIndex] = frontPlayer;
        
//         // 해시맵 업데이트
//         playerMap[calling] = currentIndex - 1;
//         playerMap[frontPlayer] = currentIndex;

//     });
//     return players;

const playerMap = {};
    
    // 초기 위치 기록
    players.forEach((player, index) => {
        playerMap[player] = index;
    });
    
    // 호출될 때마다 위치 갱신
    callings.forEach(player => {
        const currentIdx = playerMap[player];
        const frontPlayer = players[currentIdx - 1];
        
        // 배열에서 위치 교환
        [players[currentIdx - 1], players[currentIdx]] = [player, frontPlayer];
        
        // 해시맵 업데이트
        playerMap[player] = currentIdx - 1;
        playerMap[frontPlayer] = currentIdx;
    });
    
    return players;
}