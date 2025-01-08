function solution(survey, choices) {
    // 점수 저장할 객체
    const scores = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };

    const option = {
         '1': 3,
         '2': 2, 
         '3': 1,
         '4': 0, 
         '5': 1, 
         '6': 2, 
         '7': 3 
    }
    // const surveyType =['RT','TR','FC','CF','MJ','JM','AN','NA']
    
    
    // 매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다.
    // 동의나 비동의 선택지를 선택하면 2점을 얻습니다.
    // 약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다.
    // 모르겠음 선택지를 선택하면 점수를 얻지 않습니다.
    
    // 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.
    
    //  모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단
    
    survey.forEach((types,index) => {
        const [disagree,agree] = types.split('');
        const choice = choices[index];
        
        if (choice < 4) {
            scores[disagree] += option[choice];
        } else if (choice > 4) {
            scores[agree] += option[choice];
        }
    });
    
    const result = [
        scores.R >= scores.T ? 'R' : 'T',
        scores.C >= scores.F ? 'C' : 'F',
        scores.J >= scores.M ? 'J' : 'M',
        scores.A >= scores.N ? 'A' : 'N',
    ].join('');
    
    return result;
}