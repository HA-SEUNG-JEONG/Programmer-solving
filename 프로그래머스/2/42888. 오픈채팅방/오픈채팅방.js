function solution(record) {
    // 누군가 들어오면
    // "[닉네임]님이 들어왔습니다."
    
    // 누군가 나가면
    // "[닉네임]님이 나갔습니다."
    
    // 닉네임 변경 방법
    // 1. 채팅방 나간 후 -> 새로운 닉네임으로 들어감
    // 2. 채팅방에서 닉네임을 변경
    
    // 최종으로 구하고자 하는 건 무엇인가? -> 최종으로 보는 메시지
    // 입력값 중 수정되지 않는 건 무엇인가? -> 유저 아이디
    // 입력값 중 수정되는 건 무엇인가? -> 닉네임
    
    // Leave일 때는 데이터 추가 X
    
    const result = [];
    const uid = {};
    
    for(const line in record){
        const cmd = record[line].split(' ');
        if(cmd[0] !== 'Leave') uid[cmd[1]] = cmd[2];
    }
    
    for(const line in record){
        const cmd = record[line].split(' ');
        if(cmd[0] === "Enter"){
            result.push(uid[cmd[1]] + '님이 들어왔습니다.');
        }else if(cmd[0] === "Leave"){
            result.push(uid[cmd[1]] + '님이 나갔습니다.')
        }
    }
    
    return result;
    
}