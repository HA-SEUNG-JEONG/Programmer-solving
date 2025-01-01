
function solution(s, skip, index) {
    const skipSet = new Set(skip);
    
    const getNextChar = (char) => {
        let code = char.charCodeAt(0);
        let count = 0;
        
        while(count < index){
            // 다음 문자로 이동
            code++;
            // z를 넘어가면 a로 넘어가기
            if(code > 122) code = 97;
            
            // 현재 코드를 문자로 변환
            const nextChar = String.fromCharCode(code);
            
            // skip에 없는 문자만 카운트
            if(!skipSet.has(nextChar)) count++;
            
        }
        return String.fromCharCode(code)
    }
    
    return s.split('').map(getNextChar).join('')
    
//     // index만큼 뒤의 알파벳이 z를 넘어갈 경우 a로 넘어가기
    
//     let result = '';
//     for(let i=0;i<s.length;i++){
//         // 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꾸기    
//         // charCodeAt을 써야 하나..?
//         // skip에 있는 알파벳은 제외
       
//     }
}