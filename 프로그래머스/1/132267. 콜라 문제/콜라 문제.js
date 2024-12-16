function solution(a, b, n) {
   // a:2, b:1, n:20
    let result = 0;
    
    while(n >= a){
        const newCola = Math.floor(n/a)*b;
        result += newCola;
        
        n = (n % a) + newCola;
    }
    return result;
}