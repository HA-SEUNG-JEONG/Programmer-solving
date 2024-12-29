function solution(dartResult) {
    // S -> 1제곱, D -> 제곱, T -> 3제곱
    // 옵션 스타상(*)과 아차상(#), 스타상은 첫번째 기회에도 나올 수 있고, 이 때는 첫번째 스타상의 점수만 2배가 됨
    // 스타상의 효과는 다른 스타상의 효과와 중첩될 수 있음. 이 경우 중첩된 스타상 점수는 4배가 됨
    // 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. 
    // S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환
    
    const scores = [];
    let currentNumber = '';
    
    for(let i=0;i<dartResult.length;i++){
        const char = dartResult[i];
        
        if(!isNaN(char)) currentNumber+=char;
        else if(char === "S" || char === "D" || char === "T"){
            const number = Number(currentNumber);
            if(char === "S") scores.push(Math.pow(number,1))
            if(char === "D") scores.push(Math.pow(number,2))
            if(char === "T") scores.push(Math.pow(number,3))
            
            currentNumber = '';
        }
        else if (char === '*' || char === '#') {
            if (char === '*') {
                scores[scores.length - 1] *= 2;
                if (scores.length > 1) {
                    scores[scores.length - 2] *= 2;
                }
            }
            if (char === '#') {
                scores[scores.length - 1] *= -1;
            }
        }
    }
    return scores.reduce((acc,cur) => acc+cur,0)
}