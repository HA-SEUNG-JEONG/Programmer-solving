function solution(s) {
    // 첫글자를 x라고 하고, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 세기
    let result = 0;
    let x = '';
    let notXCount = 0;
    let xCount = 0;
    
    // for(let i=1;i<s.length;i++){
    //     notXCount += s[i];
    //     console.log(notXCount)
    // }
    
    // 처음으로 두 횟수가 같아지는 순간 알아내기
    // 현재까지 읽은 문자열을 분리
    // 두 횟수가 다른 상태에서 더 이상 읽은 글자가 있는지 확인
    // 없으면 지금까지 읽은 문자열을 분리하고 종료
    for(let i=0;i<s.length;i++){
        if(x === '') x = s[i]
        
        if(s[i] === x) xCount++;
        else notXCount++;
        
        if(xCount === notXCount){
            result++;
            x = '';
            xCount = 0;
            notXCount = 0;
        }else if(i === s.length-1){
            result++;
        }
    }
    return result;
}