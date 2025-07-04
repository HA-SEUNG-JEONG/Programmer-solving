function solution(brown, yellow) {
    const totalSize = brown + yellow;
    for(let height=3;height<totalSize;height++){
        if(totalSize % height === 0){
            const width = totalSize / height;
            if((width - 2) * (height -2) === yellow){
                return [width,height]
            }
        }
    }
    
}