function solution(n, k, enemy) {
    // n: 병사의 수, k: 무적권 횟수, enemy : 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열
    
    // 몇 라운드까지 막을 수 있는지 리턴해야 함 
    
//     let result = 0;
    
//     const defenseLog = [];
//     let round = 0;
    
//     for(let i=0; i<enemy.length; i++) {
//         const currentEnemy = enemy[i];
//         defenseLog.push(currentEnemy);
//         defenseLog.sort((a,b) => a -b);
        
//         if(defenseLog.length > k) {
//             const weakestEnemy = defenseLog.shift();
//             n -= weakestEnemy;
//         }
        
//         if(n < 0) {
//             return i;
//         }
//     }
    
//     return enemy.length;
    
    // 이진탐색으로 푸는 게 더 나음
    let left = 0;
    let right = enemy.length;
    
    let result = 0;
    
    const canSurvive = (rounds) => {
        if(rounds <= k) return true;
        const attacks = enemy.slice(0,rounds);
        
        attacks.sort((a,b) => a - b);
        
        let soldiersNeeded = 0;
        const roundsToFight = rounds - k;
        
        for(let i=0; i < roundsToFight; i++) {
            soldiersNeeded += attacks[i];
        }
        
        return n >= soldiersNeeded;
    }
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(canSurvive(mid)) {
            result = mid;
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return result;
    
    
}