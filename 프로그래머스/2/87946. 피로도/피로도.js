function solution(k, dungeons) {
    // 최소 필요 피로도, 소모 피로도
    // dungeons -> [최소 필요 피로도, 소모 피로도]
    // 유저가 탐험할 수 있는 최대 던전 수를 return
    
  let maxCount = 0;

    // 모든 가능한 던전 순서를 생성하는 함수
    function getPermutations(arr) {
        if (arr.length === 0) return [[]];

        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            const permutations = getPermutations(remaining);

            for (let perm of permutations) {
                result.push([current, ...perm]);
            }
        }
        return result;
    }

    // 모든 가능한 던전 순서 생성
    const permutations = getPermutations(dungeons);

    // 각 순서에 대해 탐험 가능한 던전 수 계산
    for (let order of permutations) {
        let currentFatigue = k;
        let count = 0;

        for (let dungeon of order) {
            if (currentFatigue >= dungeon[0]) {
                currentFatigue -= dungeon[1];
                count++;
            } else {
                break;
            }
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}