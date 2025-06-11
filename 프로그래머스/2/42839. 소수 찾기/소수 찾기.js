function solution(numbers) {
// numbers에 있는 숫자들을 쪼개서 배열로 변환
    const arr = numbers.split("").map(Number);
    const visited = new Array(arr.length).fill(false);
    const primeSet = new Set();

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const generateNumbers = (current, depth, maxDepth) => {
        if (depth > maxDepth) return;

        if (current.length > 0) {
            const num = parseInt(current, 10);
            if (isPrime(num)) {
                primeSet.add(num);
            }
        }

        for (let i = 0; i < arr.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                generateNumbers(current + arr[i], depth + 1, maxDepth);
                visited[i] = false;
            }
        }
    };

    // 1자리부터 numbers.length자리까지 모든 순열 생성
    for (let i = 1; i <= numbers.length; i++) {
        generateNumbers("", 0, i);
    }

    return primeSet.size;
}