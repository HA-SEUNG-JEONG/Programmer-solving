function solution(participants, completion) {
    // participant : 마라톤에 참여한 선수들의 이름이 담긴 배열
    // completion : 완주한 선수들의 이름이 담긴 배열
    
    // 참가자 이름은 알파벳 소문자로 구성
    const participantsMap = new Map();
    
    for (const participant of participants) {
        participantsMap.set(participant, (participantsMap.get(participant) || 0) + 1);
    }
    
     for (const player of completion) {
        const count = participantsMap.get(player);
        if (count === 1) {
            participantsMap.delete(player);
        } else {
            participantsMap.set(player, count - 1);
        }
     }
    
    return [...participantsMap.keys()][0];
}