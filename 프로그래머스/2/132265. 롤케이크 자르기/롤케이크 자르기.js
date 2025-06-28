function solution(topping) {
    const leftCount = {};
    const rightCount = {};
    let leftUnique = 0;
    let rightUnique = 0;
    let result = 0;

    // 오른쪽 맵 초기화
    for (const t of topping) {
        if (!rightCount[t]) {
            rightCount[t] = 0;
            rightUnique++;
        }
        rightCount[t]++;
    }

    // 왼쪽으로 토핑 이동
    for (const t of topping) {
        // 왼쪽에 토핑 추가
        if (!leftCount[t]) {
            leftCount[t] = 0;
            leftUnique++;
        }
        leftCount[t]++;

        // 오른쪽에서 토핑 제거
        rightCount[t]--;
        if (rightCount[t] === 0) {
            rightUnique--;
        }
        // 비교
        if (leftUnique === rightUnique) {
            result++;
        }
    }

    return result;
}