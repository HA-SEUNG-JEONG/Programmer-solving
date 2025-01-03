function solution(answers) {
    const patterns =[
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    // 수포자들의 점수 저장할 배열
    const result = [0,0,0];
    
//     for(let i=0;i<answers.length-1;i++){
//         // patterns[i]가 answers에 포함되어 있는지?
//        for(let j=i;j<answers.length;j++){
        
//        }
//     }
    for(const [i,answer] of answers.entries()){
        for(const [j,pattern] of patterns.entries()){
            if(answer === pattern[i % pattern.length]){
                result[j]++;
            }
        }
    }
    
    const maxScore = Math.max(...result)
    
    const highestScore = [];
    for(let k=0;k<result.length;k++){
        if(result[k] === maxScore){
            highestScore.push(k+1);
        }
    }
    
    return highestScore
}