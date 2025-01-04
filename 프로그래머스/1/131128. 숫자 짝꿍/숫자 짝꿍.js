function solution(X, Y) {
//     let result = '';
//     // X,Y의 짝꿍이 존재하지 않으면 -1
//     // X에 들어있는 요소와 Y에 들어있는 요소를 각각 비교
//     const x = [...X].map(x=>x).join().split(',');
//     const y = [...Y].map(y=>y).join().split(',');
//     // X,Y에 공통으로 들어있는 요소들만 빼기
//     const intersection = x.filter(value => {
//         const index = y.indexOf(value);
//         if (index !== -1) {
//             y.splice(index, 1);
//             return true;
//         }
//         return false;
// });
//    return intersection.sort((a,b) => b-a).join('')
    
    const freq = new Map();
    const result = [];

    // X의 각 숫자 빈도수 계산
    for (const num of X) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Y와 비교하며 공통 숫자 찾기
    for (const num of Y) {
        if (freq.get(num) > 0) {
            result.push(num);
            freq.set(num, freq.get(num) - 1);
        }
    }

    // 결과 처리
    if (result.length === 0) return "-1";
    
    result.sort((a, b) => b - a);
    
    // 0으로만 구성된 경우 처리
    return result[0] === "0" ? "0" : result.join("");
}