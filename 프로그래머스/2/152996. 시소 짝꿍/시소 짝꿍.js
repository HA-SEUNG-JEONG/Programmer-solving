function solution(weights) {
    // let result = 0;
    // for (let i = 0; i < weights.length; i++) {
    //     for (let j = i + 1; j < weights.length; j++) {
    //         if (
    //             weights[i] === weights[j] ||
    //             weights[i] * 2 === weights[j] * 3 ||
    //             weights[i] * 2 === weights[j] * 4 ||
    //             weights[i] * 3 === weights[j] * 2 ||
    //             weights[i] * 3 === weights[j] * 4 ||
    //             weights[i] * 4 === weights[j] * 2 ||
    //             weights[i] * 4 === weights[j] * 3
    //         ) {
    //             result++;
    //         }
    //     }
    // }
    // return result;
    const map = new Map();
    let result = 0;

    const ratio = [1, 3 / 2, 2, 4 / 3, 2 / 3, 1 / 2, 3 / 4];

    for (const weight of weights) {
        for (const r of ratio) {
            if (map.has(weight * r)) {
                result += map.get(weight * r);
            }
        }
        map.set(weight, (map.get(weight) || 0) + 1);
    }
    return result;
}
