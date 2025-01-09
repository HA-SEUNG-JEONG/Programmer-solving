function solution(new_id) {
    // 아이디는 알파벳 소문자, 숫자, -, _, . 만 사용할 수 있음
    // 단 .는 처음과 끝에 사용 불가능, 연속으로도 사용 불가능
    
    // 대문자가 있는 경우
    // . 가 연속으로 배치되어 있는 경우
    // 처음에 .가 있는 경우, 끝에 .가 있는 경우
    // 15자를 넘어가는 경우, 3자 미만인 경우 예외 처리
    
    // 입력값인 new_id는 '-_.~!@#$%^&*()=+[{]}:?,<>/'로 한정
    
    // 1. 대문자를 소문자로 치환
    // 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    // 3. 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    // 4. 마침표(.)가 처음이나 끝에 위치한다면 제거
    // 5. new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    // 6. new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    // 6-1. 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    // 7. new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    
//     for(let i=0;i<new_id.length;i++){
//         const char = new_id[i].toLowerCase();
        
//         if(new_id[i].toUpperCase()){
//             result += new_id[i].toLowerCase();
//         }

//         else if (
//           (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || char === '-' || char === '_' || char === '.') 
//         {
//           result += char;
//         }
//         else if(new_id[i] === ''){
//             result += 'a'
//         }
        
//     }
    
    let result = new_id.toLowerCase();
    
    const allowedChars = '1234567890abcdefghijklmnopqrstuvwxyz-_.';
    let temp = '';
    
    for(let char of result){
        if(allowedChars.includes(char)){
            temp += char;
        }
    }
    result = temp;
    
    temp = '';
    for (let i = 0; i < result.length; i++) {
        if (!(result[i] === '.' && result[i + 1] === '.')) {
            temp += result[i];
        }
    }
    result = temp;
    
    // 4단계: 처음과 끝의 마침표 제거
    if (result[0] === '.') {
        result = result.slice(1);
    }
    if (result[result.length - 1] === '.') {
        result = result.slice(0, -1);
    }
    
    // 5단계: 빈 문자열이면 'a' 대입
    if (result === '') {
        result = 'a';
    }
    
    // 6단계: 길이가 16자 이상이면 15자로 자르기
    if (result.length >= 16) {
        result = result.slice(0, 15);
        if (result[result.length - 1] === '.') {
            result = result.slice(0, -1);
        }
    }
    
    // 7단계: 길이가 2자 이하라면 마지막 문자 반복
    while (result.length <= 2) {
        result += result[result.length - 1];
    }
    
    return result;
}