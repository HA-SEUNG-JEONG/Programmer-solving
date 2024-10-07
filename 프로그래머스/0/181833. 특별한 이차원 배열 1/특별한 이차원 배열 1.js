function solution(n) {
      const answer = [];

    for (let i = 0; i < n; i++) {
        let row = new Array(n).fill(0);  
        row[i] = 1;  
        answer.push(row); 
    }

    return answer;
}