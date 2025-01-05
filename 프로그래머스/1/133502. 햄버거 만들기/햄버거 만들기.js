function solution(ingredient) {
    // 스택 문제
    // 빵, 야채, 고기는 각각 1,2,3
    // 1,2,3,1 패턴인 경우에만 valid
    
    // 빈 문자열에 1,2,3,1을 차례대로 넣어보기...?
    // '1231'일 때 count 증가?
    
    let result = 0;
    const stack = []; // 빈 배열 선언
    
    for(let i=0;i<ingredient.length;i++){
        stack.push(ingredient[i]); // 일단 집어넣기
        if(stack.length>=4){
            const len = stack.length;
            if(stack[len-4] === 1 && stack[len-3] === 2 && stack[len-2] === 3 && stack[len-1] === 1){
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                result++;
            }
        }
    }
    return result
}