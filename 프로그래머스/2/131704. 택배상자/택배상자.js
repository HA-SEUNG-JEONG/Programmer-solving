function solution(order) {
    // 스택 문제인듯
    const stack = [];
    let box = 1;
    let index = 0;
    
    const len = order.length;
    
    while(box <= len){
        if(box === order[index]){
            index++;
            box++;
        } else if(stack.length && stack.at(-1) === order[index]){
            stack.pop();
            index++;
        }else {
            stack.push(box);
            box++;
        }
    }
    
    while (stack.length && stack.at(-1) === order[index]) {
    stack.pop();
    index++;
  }

  return index;
}