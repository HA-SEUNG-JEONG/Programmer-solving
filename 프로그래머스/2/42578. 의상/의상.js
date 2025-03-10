function solution(clothes) {
  const map = new Map();
    clothes.forEach((cloth) => {
        const [name, type] = cloth;
        if (map.has(type)) {
            map.set(type, map.get(type) + 1);
        } else {
            map.set(type, 1);
        }
    });

    let answer = 1;
    for (let value of map.values()) {
        answer *= value + 1;
    }
    return answer - 1;
}