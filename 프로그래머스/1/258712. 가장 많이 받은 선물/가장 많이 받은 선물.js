function solution(friends, gifts) {
    // A가 B에게 5번 주고, B가 A에게 3번 줬다면, 다음달에는 A가 B에게 선물을 하나 받음
    // A가 B보다 준 횟수가 많기 때문
    
    // 선물 지수 : 준 선물 - 받은 선물
    // A,B 모두 준 선물과 받은 선물이 각각 0이고, 선물 지수가 0일 때, B가 A에게 선물 하나를 받음
    // 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않음
    
    // 친구들의 이름 배열 friends
    // 이번 달까지 주고받은 선물 기록을 담은 배열 gifts
    // 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return
    
    // Map 자료 구조 이용?
    
    const giftHistory = {}
    const giftIndex = {}
    
    // 초기화
    friends.forEach(friend => {
        giftHistory[friend] = {};
        friends.forEach(f => {
            if (f !== friend) {
                giftHistory[friend][f] = 0;
            }
        });
        giftIndex[friend] = { given: 0, taken: 0 };
    })

    // 선물 기록 처리
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(' ');
        giftHistory[giver][receiver] = (giftHistory[giver][receiver] || 0) + 1;
        giftIndex[giver].given++;
        giftIndex[receiver].taken++;
    });
    
    
    // 다음 달 선물 받을 개수 계산
    const nextMonthGifts = {};
    friends.forEach(friend => nextMonthGifts[friend] = 0);
    
    // 친구 쌍 비교
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const friendA = friends[i];
            const friendB = friends[j];

            const aToB = giftHistory[friendA][friendB] || 0;
            const bToA = giftHistory[friendB][friendA] || 0;
            
            if (aToB > bToA) {
                nextMonthGifts[friendA]++;
            } else if (bToA > aToB) {
                nextMonthGifts[friendB]++;
            } else {
                const aGiftIndex = giftIndex[friendA].given - giftIndex[friendA].taken;
                const bGiftIndex = giftIndex[friendB].given - giftIndex[friendB].taken;
                
                if (aGiftIndex > bGiftIndex) {
                    nextMonthGifts[friendA]++;
                } else if (bGiftIndex > aGiftIndex) {
                    nextMonthGifts[friendB]++;
                }
            }
        }
    }
    
    return Math.max(...Object.values(nextMonthGifts));
    
//     friendMap.forEach((friend, id) => {
//         friend.forEach(f => {
            
//         })
        
//         // 준 선물, 받은 선물 0이거나 선물지수가 0인 경우
//     });
    
}