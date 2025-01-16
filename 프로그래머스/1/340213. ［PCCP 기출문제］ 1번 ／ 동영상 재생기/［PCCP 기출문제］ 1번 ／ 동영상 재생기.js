function solution(video_len, pos, op_start, op_end, commands) {
    // 'prev' 명령 입력시 재생 위치를 현재 위치에서 10초 전으로 이동
    // 현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동
    // 'next' 명령 입력시 재생 위치를 현재 위치에서 10초 후로 이동
    // 남은 시간이 10초 미만일 경우 영상의 마지막 위치로 이동, 영상의 마지막 위치는 동영상의 길이와 동일
    
    // 동영상의 길이를 나타내는 문자열 video_len
    // 기능이 수행되기 직전의 재생위치를 나타내는 문자열 pos
    // 오프닝 시작 시각을 나타내는 문자열 op_start
    // 오프닝이 끝나는 시각을 나타내는 문자열 op_end
    // 사용자의 입력을 나타내는 1차원 문자열 배열 commands
    
    // 현재 재생 위치가 오프닝 구간(op_start ≤ 현재 재생 위치 ≤ op_end)인 경우 자동으로 오프닝이 끝나는 위치로 이동
    
    // video_len, pos, op_start, op_end는 "mm:ss" 형식
    
    // 오프닝이 시작하는 시각은 항상 오프닝이 끝나는 시각보다 전입니다.
    
    // pos가 10초 미만이면 op_end로 이동
    
//     let result = '';
//     let currentPos = pos;
    
//     for(let i=0; i<video_len.length;i++){
//         if(currentPos < '00:10'){
//             currentPos = '00:00';
//         }
//         else if(op_start <= currentPos && op_end >= currentPos){
//             currentPos = op_end;
//         }
//         // commands 입력
//         if(commands[i] === 'prev'){
//             currentPos += '00:10';
//         }
//         else if(commands[i] === 'next'){
//             Number(currentPos) -= '00:10'
//         }
//     }
    
//     return currentPos;
    
    // 초를 mm:ss 형식으로 변환하는 함수
    const secondsToTime = (time) => {
        const [h,m] = time.split(':');
        return Number(h) * 60 + Number(m)
    };
    
    let currentPos = secondsToTime(pos);
    const currentPosStart = secondsToTime(op_start);
    const currentPosEnd = secondsToTime(op_end)
    const currentVideoLen = secondsToTime(video_len);
    
    if(currentPos >= currentPosStart && currentPos <= currentPosEnd) {
        currentPos = currentPosEnd;
    }
    
    commands.forEach(command => {
        currentPos += command === 'next' ? 10 : -10;
        
        if(currentPos < 0) currentPos = 0;
        
        if(currentPos > currentVideoLen) currentPos = currentVideoLen;
        
        if(currentPos >= currentPosStart && currentPos <= currentPosEnd) currentPos = currentPosEnd;
    });
    
  const hour = Math.floor(currentPos / 60) + "";
  const minute = (currentPos % 60) + "";
    
  return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;

}