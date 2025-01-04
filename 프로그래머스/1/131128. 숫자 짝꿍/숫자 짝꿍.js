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
    
    const numCount = Array(10).fill(0);
    const yCount = Array(10).fill(0);
    
    [...X].forEach(n => numCount[n]++);
    [...Y].forEach(n => yCount[n]++);
    
    const result = [];
    for(let i=0;i<10;i++){
        const count = Math.min(numCount[i],yCount[i]);
        for(let j=0;j<count;j++){
            result.push(i);
        }
    }
    
    if(result.length === 0) return '-1';
    
    const answer = result.sort((a,b) => b-a).join('');
    return answer[0] === '0' ? '0' : answer
}