function solution(n, arr1, arr2) {
    // 각 칸은 공백(' ') 또는 벽('#') 두 종류로 이루어져 있다.
    // 암호화된 배열은 지도의 각 가로줄에서 벽 부분은 1, 공백 부분을 0으로 부호화 했을 때 얻어지는 이진수에 해당하는 값의 배열
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let binary1 = arr1[i].toString(2);
        let binary2 = arr2[i].toString(2);
        
        binary1 = binary1.padStart(n, '0');
        binary2 = binary2.padStart(n, '0');
        
        let row = '';
        
        for (let j = 0; j < n; j++) {
            row += (binary1[j] === '1' || binary2[j] === '1') ? '#' : ' ';
        }
        
        answer.push(row);
    }
    
    return answer;

}