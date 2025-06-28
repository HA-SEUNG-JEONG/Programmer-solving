function solution(topping) {
    // let result = 0;
    // // topping 배열을 자르기
    // // (중복을 제외한) 배열에서 토핑 종류가 같으면 result 증가
    // // 아니면 result 증가하지 않음
    // for (let i = 0; i < topping.length; i++) {
    //     const left = topping.slice(0, i);
    //     const right = topping.slice(i);
    //     const leftSet = new Set(left);
    //     const rightSet = new Set(right);
    //     if (leftSet.size === rightSet.size) result++;
    // }
    // return result;

    // 2. 슬라이딩 윈도우 기법 사용하기
    const leftTopping = new Map();
    const rightTopping = new Map();

    for (let i = 0; i < topping.length; i++) {
        rightTopping.set(topping[i], (rightTopping.get(topping[i]) || 0) + 1);
    }

    let result = 0;
    for (let i = 0; i < topping.length; i++) {
        leftTopping.set(topping[i], (leftTopping.get(topping[i]) || 0) + 1);
        rightTopping.set(topping[i], (rightTopping.get(topping[i]) || 0) - 1);
        if (rightTopping.get(topping[i]) === 0) {
            rightTopping.delete(topping[i]);
        }
        if (leftTopping.size === rightTopping.size) {
            result++;
        }
    }
    return result;
}