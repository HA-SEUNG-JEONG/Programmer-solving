function solution(answers) {
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    const score = [0,0,0]
    
    for (let index = 0; index < answers.length; index++) {
        const answer = answers[index];
        for (let i = 0; i < patterns.length; i++) {
            const pattern = patterns[i];
            if (answer === pattern[index % pattern.length]) {
                score[i]++;
            }
        }
    }
    
    const maxScore = Math.max(...score);
    
    return score.reduce((result,score,index) => {
        if(score === maxScore) result.push(index+1);
        return result
    },[])
}