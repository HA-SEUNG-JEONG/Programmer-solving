function solution(answers) {
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    const score = [0,0,0]
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        for (let j = 0; j < patterns.length; j++) {
            const pattern = patterns[j];
            if (answer === pattern[i % pattern.length]) {
                score[j]++;
            }
        }
    }
    
    const maxScore = Math.max(...score);
    
    return score.reduce((result,score,index) => {
        if(score === maxScore) result.push(index+1);
        return result
    },[])
}