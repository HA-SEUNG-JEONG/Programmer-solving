function solution(n, words) {
    // [번호, 차례] 형태로 리턴
    // 앞사람이 말한 글자의 마지막 글자만 따와서 그 다음 사람이 따온 글자를 시작 글자로 세팅
    // words 배열에 있는 단어들을 빈 배열에 넣어야 할 듯
    
    // 1. 이미 사용한 단어를 저장할 Set 생성
    // 2. 첫 번째 단어를 Set에 추가
    // 3. words 배열을 순회하면서
    // 3-1. 현재 단어가 한 글자인지 확인, 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 같은지 확인, 현재 단어가 이미 사용된 단어인지 확인
    // 3-2. 위 조건 중 하나라도 위배되면 탈락자 발생
    // 4. 탈락자가 발생하면 해당 사람의 번호와 차례를 계산
    // 5. 탈락자가 없으면 [0,0] 반환
    
    const usedWords = new Set([words[0]]);
    let lastChar = words[0].charAt(words[0].length - 1);
    
    for(let i = 1; i < words.length; i++){
        const currentWord = words[i];
        const firstChar = currentWord.charAt(0);
        
        if(currentWord.length <= 1 || firstChar !== lastChar || usedWords.has(currentWord)){
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn]
        }
        
        usedWords.add(currentWord);
        lastChar = currentWord.charAt(currentWord.length - 1);
    }
    
    return [0,0]
  
}