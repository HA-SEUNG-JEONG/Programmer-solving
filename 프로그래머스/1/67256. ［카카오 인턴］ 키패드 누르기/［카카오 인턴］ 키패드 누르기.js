function solution(numbers, hand) {
    // 왼손 엄지 : *, 오른손 엄지 : # <- 처음 시작점
    // 상하좌우 4가지 방향으로만 이동 가능
    // 1,4,7을 입력할 때는 왼손 엄지
    // 3,6.9를 입력할 때는 오른손 엄지 사용
    // 2,5,8,0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락 사용
    
    // hand는 left(왼손잡이) 또는 right(오른손잡이)
    
    // 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지 손가락을 사용한 경우는 R을 순서대로 이어붙여서 리턴
    
    //  -----
    
    // 키패드 설정
     const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    const getDistance = (pos1,pos2) => {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1]-pos2[1]);
    }
    
    // 초기 위치 설정
    let leftPos = keypad['*'];
    let rightPos = keypad['#'];
    let result = ''
    
    numbers.forEach(number => {
        // 1,4,7
        if(number % 3 === 1){
            result += "L";
            leftPos = keypad[number]; // 누른 위치로 이동
        }
        // 3,6,9
        else if(number % 3 === 0 && number !== 0){
            result += "R";
            rightPos = keypad[number]
        }
        // 2,5,8,0
        else {
            const leftDist = getDistance(leftPos, keypad[number]);
            const rightDist = getDistance(rightPos, keypad[number]);
            
            if (leftDist < rightDist) {
                result += 'L';
                leftPos = keypad[number];
            } else if (leftDist > rightDist) {
                result += 'R';
                rightPos = keypad[number];
            } else {
                if (hand === 'left') {
                    result += 'L';
                    leftPos = keypad[number];
                } else {
                    result += 'R';
                    rightPos = keypad[number];
                }
            }
        }
        
    });
    return result;
}