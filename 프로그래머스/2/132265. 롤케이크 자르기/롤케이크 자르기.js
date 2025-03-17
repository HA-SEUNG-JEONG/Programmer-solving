function solution(topping) {
    let result = 0;
    const left = new Map();
    const right = new Map();

    // 초기에는 모든 토핑을 right에 넣습니다
    for (let i = 0; i < topping.length; i++) {
        right.set(topping[i], (right.get(topping[i]) || 0) + 1);
    }


    // 왼쪽으로 토핑을 하나씩 이동시키면서 비교
    for (let i = 0; i < topping.length; i++) {
        const currentTopping = topping[i];

        // 왼쪽으로 토핑 이동
        left.set(currentTopping, (left.get(currentTopping) || 0) + 1);
        right.set(currentTopping, right.get(currentTopping) - 1);

        // right에서 토핑이 0이 되면 제거
        if (right.get(currentTopping) === 0) {
            right.delete(currentTopping);
        }

        // 토핑 종류 수가 같으면 결과 증가
        if (left.size === right.size) {
            result++;
        }
    }

    return result;
}
