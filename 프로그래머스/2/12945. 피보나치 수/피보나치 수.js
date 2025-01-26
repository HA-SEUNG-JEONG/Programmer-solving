function solution(n) {
    // 2 3 5 8 13 21 34...
    // F(5) = F(4) + F(3) = F(2)+F(3)+F(3) = F(0)+F(1)+F(1)+F(2)+F(1)+F(2) = 
    const mod = 1234567;
    
    if(n === 2) return 1;
    if(n === 3) return 2;
    
    let a = 1;
    let b = 2;
    
    for(let i=4; i<=n;i++){
        const temp = (a + b) % mod;
        a = b;
        b = temp;
    }
    
    return b;
}