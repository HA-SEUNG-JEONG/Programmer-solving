function solution(m, musicinfos) {
    const replaceSharps = (melody) => {
        const sharpMap = {
            'C#': 'c', 'D#': 'd', 'F#': 'f', 
            'G#': 'g', 'A#': 'a', 'B#': 'b'  // B# 추가
        };
        return melody.replace(/C#|D#|F#|G#|A#|B#/g, (match) => sharpMap[match]);
    }
    
    const targetMelody = replaceSharps(m);
    const matchedSongs = [];
    
    musicinfos.forEach((info, index) => {
        const [startTime, endTime, title, sheetMusic] = info.split(",");
        const [startHour, startMin] = startTime.split(":").map(Number);
        const [endHour, endMin] = endTime.split(':').map(Number);
        
        // 재생시간 계산(분 단위)
        const playDuration = (endHour * 60 + endMin) - (startHour * 60 + startMin);
        const originalMelody = replaceSharps(sheetMusic);
        const melodyLen = originalMelody.length;
        
        // 실제 재생된 전체 악보 생성 
        let fullMelody = '';
        if(playDuration >= melodyLen){
            fullMelody = originalMelody.repeat(Math.floor(playDuration / melodyLen)) + originalMelody.substring(0, playDuration % melodyLen);
        } else {
            fullMelody = originalMelody.substring(0, playDuration);
        }
        
        if(targetMelody.length > fullMelody.length) {
            return;
        }
        
        // 멜로디 포함 여부 확인
        if (fullMelody.includes(targetMelody)) {
            matchedSongs.push({ title, playDuration, index});
        }
    });
    
    if(matchedSongs.length === 0) return "(None)";
    
    matchedSongs.sort((a, b) => {
        if(a.playDuration !== b.playDuration) 
            return b.playDuration - a.playDuration;  // 오타 수정
        else 
            return a.index - b.index;
    });
    
    return matchedSongs[0].title;  // 오타 수정
}
