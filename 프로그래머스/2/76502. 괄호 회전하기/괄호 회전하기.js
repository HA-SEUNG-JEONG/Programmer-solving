function isStack(str){
    const stack = [];
    const pairs = {')': '(', ']': '[', '}': '{'};
    for(const c of str){
        if(c === '(' || c === '[' || c === '{'){
            stack.push(c);
        }else if(c === ')' || c === ']' || c === '}'){
            if(stack.length === 0){
                return false;
            }
            const last = stack.pop();
            if(pairs[c] !== last) return false;
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    // 회전하는 횟수마다 첫번째 요소를 맨 뒤로 보낸다
    // 첫 번째 요소를 제거 후(unshift), 제거된 요소를 push
    let result = s;
    
    for(let i=0;i<s.length;i++){
        result = result.slice(1)+result[0];
        if(isStack(result)) count++;
    }
    return count;

}