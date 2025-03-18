function createMultiSet(str) {
    const set = {};
    for (let i = 0; i < str.length - 1; i++) {
        
        const item = str.slice(i, i + 2).toLowerCase();
        
        const isChar1 = "a".charCodeAt() <= item.charCodeAt(0) && item.charCodeAt(0) <= "z".charCodeAt();
        const isChar2 = "a".charCodeAt() <= item.charCodeAt(1) && item.charCodeAt(1) <= "z".charCodeAt();
        
        if (isChar1 && isChar2) set[item] = (set[item] || 0) + 1;
    }
    return set;
}

function solution(str1, str2) {
    // A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
    // 공집합일 경우는 1로 처리
    // 교집합은 min, 합집합은 max
    // 기타 공백이나 숫자, 특수문자는 제외
    // 예를 들어 "ab+"가 입력으로 들어오면, "ab"만 다중집합의 원소로 삼아야 함
    // 교집합과 합집합 구하기
    // 두 집합이 모두 공집합인 경우 1을 반환해야 함
    // 중복 허용해야 함

    const set1 = createMultiSet(str1);
    const set2 = createMultiSet(str2);
    // console.log(set1, set2);

    if (Object.keys(set1).length === 0 && Object.keys(set2).length === 0) {
        return 65536;
    }

    let intersectionSize = 0;
    let unionSize = 0;

    // 모든 원소에 대해 교집합과 합집합 계산
    const allElements = new Set([...Object.keys(set1), ...Object.keys(set2)]);

    allElements.forEach((element) => {
        const count1 = set1[element] || 0;
        const count2 = set2[element] || 0;
        intersectionSize += Math.min(count1, count2);
        unionSize += Math.max(count1, count2);
    });

    // 자카드 유사도 계산 및 결과 반환
    return Math.floor((intersectionSize / unionSize) * 65536);
}
