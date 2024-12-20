function solution(n, arr1, arr2) {
    // 각 칸은 공백(' ') 또는 벽('#') 두 종류로 이루어져 있다.
    // 암호화된 배열은 지도의 각 가로줄에서 벽 부분은 1, 공백 부분을 0으로 부호화 했을 때 얻어지는 이진수에 해당하는 값의 배열
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        // 비트 OR 연산으로 두 지도 합치기
        const combinedRow = arr1[i] | arr2[i];
        console.log(combinedRow)
        
        // 2진수 변환 후 패딩
        let binaryStr = combinedRow.toString(2).padStart(n, '0');
        
        // 문자열 변환
        let decodedRow = '';
        for (let j = 0; j < n; j++) {
            decodedRow += binaryStr[j] === '1' ? '#' : ' ';
        }
        
        answer.push(decodedRow);
    }
    
    return answer;
}