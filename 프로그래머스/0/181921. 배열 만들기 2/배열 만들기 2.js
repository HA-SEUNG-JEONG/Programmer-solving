function solution(l, r) {
    const result = [];
    
    for(let i=l; i<=r;i++){
        if(String(i).split('').every(digit => digit === '0' || digit === '5')){
            result.push(i)
        }
    }
    return result.length > 0 ? result : [-1]
}