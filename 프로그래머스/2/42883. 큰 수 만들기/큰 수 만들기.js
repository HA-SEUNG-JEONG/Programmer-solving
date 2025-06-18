function solution(number, k) {
    const result = [];
    for (const num of number) {
        // 스택이 비어있지 않고, 아직 제거할 수가 남아있으며
        // 스택의 마지막 요소가 현재 숫자보다 작다면
        while (result.length > 0 && result.at(-1) < num && k > 0) {
            result.pop(); // 스택의 마지막 요소 제거
            k--; // 제거 카운트 감소
        }
        result.push(num);
    }
    // 만약 k개를 다 제거하지 못했다면, 위에서부터 남은 개수만큼 제거
    if (k > 0) {
        result.splice(result.length - k, k);
    }
    return result.join("");
}