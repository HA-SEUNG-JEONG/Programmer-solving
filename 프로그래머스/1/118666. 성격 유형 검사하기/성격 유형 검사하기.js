function solution(survey, choices) {
    // 1. 성격 유형 지표를 정의
    const types = [
        ['R', 'T'],
        ['C', 'F'],
        ['J', 'M'],
        ['A', 'N']
    ];
    
    // 2. 점수를 기록할 Map 생성
    const scores = new Map();
    // 모든 성격 유형의 초기 점수를 0으로 설정
    types.flat().forEach(type => scores.set(type, 0));
    
    // 3. 점수 계산 함수
    const calculateScore = (choice) => Math.abs(4 - choice);
    
    // 4. 설문 결과 처리
    survey.forEach((question, index) => {
        const choice = choices[index];
        
        // 4점(모르겠음)이 아닌 경우에만 점수 계산
        if (choice !== 4) {
            const [first, second] = question.split('');
            // 4보다 작으면 첫 번째 유형에 점수 부여
            // 4보다 크면 두 번째 유형에 점수 부여
            const targetType = choice < 4 ? first : second;
            const score = calculateScore(choice);
            scores.set(targetType, scores.get(targetType) + score);
        }
    });
    
    // 5. 최종 성격 유형 결정
    return types.map(([a, b]) => {
        // 각 지표별로 점수가 높은 유형 선택
        // 같으면 알파벳 순으로 앞선 것 선택
        return scores.get(a) >= scores.get(b) ? a : b;
    }).join('');
}
