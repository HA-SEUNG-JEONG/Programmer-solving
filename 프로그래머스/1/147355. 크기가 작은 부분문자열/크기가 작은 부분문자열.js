function solution(t, p) {
    let result = 0;
    const length = p.length;
    
    for(let i=0; i<=t.length-length; i++){
        const subStr = t.slice(i,i+length);
        
        if(Number(subStr) <= Number(p)){
            result++;
        }
    }
    return result;
}