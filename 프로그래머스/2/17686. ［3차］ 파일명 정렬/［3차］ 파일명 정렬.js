function solution(files) {
    const parseFileName = (fileName, index) => {
        // 정규표현식으로 HEAD, NUMBER, TAIL 분리
        const match = fileName.match(/^([^0-9]+)([0-9]{1,5})(.*)$/i);
        if (!match) {
            // 숫자가 없는 경우 (문제 조건상 없을 수 있지만 안전장치)
            return { head: fileName.toLowerCase(), number: 0, index, original: fileName };
        }
        const [_, head, number, tail] = match;
        return {
            head: head.toLowerCase(),
            number: parseInt(number, 10),
            index,
            original: fileName
        };
    };

    return files
        .map((file, index) => parseFileName(file, index))
        .sort((a, b) => {
            // 1. HEAD 기준으로 정렬 (대소문자 구분 없이)
            if (a.head !== b.head) {
                return a.head.localeCompare(b.head);
            }
            // 2. NUMBER 기준으로 정렬
            if (a.number !== b.number) {
                return a.number - b.number;
            }
            // 3. 원래 순서 유지
            return a.index - b.index;
        })
        .map(item => item.original);
}