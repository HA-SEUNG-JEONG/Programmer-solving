function solution(numbers) {
    // 숫자를 문자열로 변환
    const strNums = numbers.map(String);
    const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        return merge(left, right);
    };

    // 병합 함수
    const merge = (left, right) => {
        const result = [];
        let i = 0,
            j = 0;

        while (i < left.length && j < right.length) {
            // b+a와 a+b를 비교
            if (left[i] + right[j] > right[j] + left[i]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }

        return [...result, ...left.slice(i), ...right.slice(j)];
    };

    const sorted = mergeSort(strNums);
    const result = sorted.join("");

    return result[0] === "0" ? "0" : result;
}