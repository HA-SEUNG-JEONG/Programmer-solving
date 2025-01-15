function solution(bandage, health, attacks) {
    // t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복
    // t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복
    // 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며, 연속 성공 시간이 0으로 초기화
    
    // bandage -> 기술의 시전 시간, 1초당 회복량, 추가 회복량
    const [time, recovery, extraRecovery] = bandage;
    let currentHealth = health;
    let lastAttackTime = 0;
    let continuousTime = 0;
    
    for(const [attackTime, damage] of attacks){
        const healingTime = attackTime - lastAttackTime - 1;
        if(healingTime > 0){
            const successCount = Math.floor(healingTime / time);
            const normalRecovery = healingTime * recovery;
            const extraHeal = successCount * extraRecovery;
            currentHealth = Math.min(health, currentHealth + normalRecovery + extraHeal);
        }
        
        currentHealth -= damage;
        if (currentHealth <= 0) return -1;
        
        lastAttackTime = attackTime;
        continuousTime = 0;
    }
    
    return currentHealth;
    // health -> 최대 체력
    // attacks -> 몬스터의 공격 시간, 피해량
    attacks.forEach(attack => {
        const [attackTime,damage] = attack
    })
    
    // 모든 공격이 끝난 직후 남은 체력을 return
    // 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return
}