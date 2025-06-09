function solution(numbers) {
    // 숫자를 문자열로 변환
    const strNums = numbers.map(String);

    // 퀵소트 구현
    const quickSort = (arr) => {
        if (arr.length <= 1) return arr;

        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            // b+a와 a+b를 비교하여 정렬
            if (arr[i] + pivot > pivot + arr[i]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    };

    const sorted = quickSort(strNums);
    const result = sorted.join("");

    return result[0] === "0" ? "0" : result;
}