function solution(brown, yellow) {
    const len = brown + yellow;
    for(let i=2;i<=Math.sqrt(len);i++){
        // 12면 4,3 or 6,2
        if(len % i === 0){
            const width = len / i;
            
            if((width - 2) * (i - 2) === yellow){
                return [width,i]
            }
        }
    }
}