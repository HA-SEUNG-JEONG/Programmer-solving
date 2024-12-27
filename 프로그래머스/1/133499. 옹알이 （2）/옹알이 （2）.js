function solution(babbling) {
    let result = 0;
    const babblingList = ['aya','ye','woo','ma'];
    
     for (const word of babbling) {
        let current = word;
        let prev = '';
        let isPossible = true;
         
        // 현재 단어가 있고 발음이 가능한 상태일 때 계속 반복
        while (current.length > 0 && isPossible) {
            let matched = false;
            
            // 가능한 발음들을 하나씩 체크
            for (const babble of babblingList) {
                // 현재 단어가 해당 발음으로 시작하고, 직전 발음과 같지 않은 경우
                if (current.startsWith(babble) && prev !== babble) {
                    // 매칭된 발음만큼 제거
                    current = current.slice(babble.length);
                    // 이전 발음 업데이트
                    prev = babble;
                    // 매칭 성공
                    matched = true;
                    break;
                }
            }
            
            // 매칭된 발음이 없으면 발음 불가능으로 표시
            if (!matched) {
                isPossible = false;
            }
        }
        
        if (current.length === 0 && isPossible) {
            result++;
        }
    }
    
    return result;
}