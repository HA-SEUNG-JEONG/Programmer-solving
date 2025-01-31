function solution(participant, completion) {
    // 완주자의 이름을 참여자에서 바로 찾을 수 있는 방법
//     const playerMap = new Map();
    
//     participant.forEach(part => playerMap.set(part,(playerMap.get(part) || 0) + 1));
//     completion.forEach(complete => playerMap.set(complete, playerMap.get(complete) -1));
    
//     for(let [player, count] of playerMap){
//         if(count > 0) return player;
//     }
    const obj = {};
    
    for(const p of participant){
        if(obj[p]) obj[p]++;
        else obj[p] = 1;
    }
    
    for(const c of completion){
        obj[c]--;
    }
    
    for(const key in obj){
        if(obj[key]) return key;
    }

 }