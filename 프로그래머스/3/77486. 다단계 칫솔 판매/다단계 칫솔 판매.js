function solution(enroll, referral, seller, amount) {
    let parent = {};
    
    for(let i=0; i < enroll.length; i++){
        // 키 값 넣기
        parent[enroll[i]] = referral[i];
    }
    
    let total = {};
    for(const name of enroll){
        total[name] = 0;
    }
    
    for(let i=0; i < seller.length; i++){
        let money = amount[i] * 100;
        let currentName = seller[i];
        
        while(money > 0 && currentName !== '-'){
            total[currentName] += money - Math.floor(money / 10);
            currentName = parent[currentName];
            
            money = Math.floor(money / 10);
        }
    }
    return enroll.map(name => total[name])
}