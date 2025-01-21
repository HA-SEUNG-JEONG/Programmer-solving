function solution(progresses, speeds) {
    const queue = [];
    const n = progresses.length;
    
    // 남은 일수 계산
    const daysLeft = progresses.map((progress,index) => 
        Math.ceil((100-progress) / speeds[index]))

    let count = 0;
    let maxDay = daysLeft[0];
    
    for(let i=0;i<n;i++){
        if(daysLeft[i] <= maxDay) count++;
        else {
            queue.push(count);
            count = 1;
            maxDay = daysLeft[i]
        }
    }
    
    queue.push(count);
    return queue;
}