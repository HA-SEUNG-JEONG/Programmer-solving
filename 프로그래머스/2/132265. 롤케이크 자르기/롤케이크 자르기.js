function solution(topping) {
    let result = 0;
    const rightCount = new Map(); // 오른쪽 토핑 개수
    const leftSet = new Set(); // 왼쪽 토핑 종류
    let rightKinds = 0; // 오른쪽 토핑 종류 수

    // 초기 오른쪽 토핑 상태 설정
    for (const t of topping) {
        rightCount.set(t, (rightCount.get(t) || 0) + 1);
    }
    rightKinds = rightCount.size;

    // 토핑을 하나씩 왼쪽으로 이동
    for (const t of topping) {
        // 왼쪽에 토핑 추가
        leftSet.add(t);

        // 오른쪽 토핑 개수 감소
        rightCount.set(t, rightCount.get(t) - 1);
        if (rightCount.get(t) === 0) {
            rightKinds--;
        }

        // 양쪽의 토핑 종류 수가 같으면 결과 증가
        if (leftSet.size === rightKinds) result++;
    }

    return result;
}
