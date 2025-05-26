function solution(x, y, n) {
    if (x === y) return 0;
    
    let result = 0;
    let queue = [y];  // Start from y and work backwards
    let visited = new Set([y]);

    while (queue.length > 0) {
        const nextLevel = [];
        result++;
        
        for (const current of queue) {

            if (current - n >= x && !visited.has(current - n)) {
                if (current - n === x) return result;
                visited.add(current - n);
                nextLevel.push(current - n);
            }
            

            if (current % 2 === 0) {
                const next = current / 2;
                if (next >= x && !visited.has(next)) {
                    if (next === x) return result;
                    visited.add(next);
                    nextLevel.push(next);
                }
            }
            
            if (current % 3 === 0) {
                const next = current / 3;
                if (next >= x && !visited.has(next)) {
                    if (next === x) return result;
                    visited.add(next);
                    nextLevel.push(next);
                }
            }
        }
        
        queue = nextLevel;
    }
    
    return -1;
}