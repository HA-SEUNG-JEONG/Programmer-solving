function solution(want, number, discount) {
    // 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입
    // 원하는 제품을 나타내는 문자열 배열 want
    // 정현이가 원하는 제품의 수량을 나타내는 정수 배열 number
    // XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount
    // 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return
    // 가능한 날이 없으면 0을 return
    
//     const disCountSet = {};
//     const wantSet = {};
//     let result = 0;
    
//     want.forEach((item,index) => {
//         wantSet[index] = item;
//     })
    
//     discount.forEach((item, index) => {
//         disCountSet[index] = item
//     })
    
    
//     for(let i=0;i<discount.length;i++){
//         // discount랑 want를 비교?
//         // 열흘동안에 할인하는 제품이 포함되어 있지 않거나, 원하는 만큼 제품을 구매할 수 없을 경우 처리
        
//     }
    
    const need = {};
    want.forEach((item,index) => {
        need[item] = number[index];
    });
    
    const n = discount.length;
    if(n < 10) return 0;
    
    let result = 0;
    const windowCount = {};
    
    for(let i=0; i < 10; i++){
        const item = discount[i];
        windowCount[item] = (windowCount[item] || 0) + 1;
    }
    
    if (checkCondition(need, windowCount)) result++;
    
    // 슬라이딩 윈도우 이동
    for (let i = 1; i <= n - 10; i++) {
        const prevItem = discount[i - 1];
        windowCount[prevItem]--;
        if (windowCount[prevItem] === 0) delete windowCount[prevItem];
        
        const newItem = discount[i + 9];
        windowCount[newItem] = (windowCount[newItem] || 0) + 1;
        
        if (checkCondition(need, windowCount)) result++;
    }
    
    return result;
    
    
}

function checkCondition(need, window) {
    for (const item in need) {
        if ((window[item] || 0) !== need[item]) {
            return false;
        }
    }
    return true;
}