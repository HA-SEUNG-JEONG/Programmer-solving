function solution(priorities, location) {
    let turn = 0;
    const queue = priorities.map((priority, index) => ({priority,index}))
    
    while(queue.length > 0){
        const current = queue.shift();
        if(queue.some(process => process.priority > current.priority)) queue.push(current);
        else {
            turn++;
            if(current.index === location) return turn;
        }
    }
    return turn;
}