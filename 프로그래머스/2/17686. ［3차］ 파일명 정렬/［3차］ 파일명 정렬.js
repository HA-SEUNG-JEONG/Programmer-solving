function solution(files) {
    const parseFileName = (fileName, index) => {
        // 정규표현식으로 HEAD, NUMBER, TAIL 분리
        let head = '';
        let number = '';
        let i = 0;
        
        // 1. HEAD 부분 추출 (숫자가 나오기 전까지)
        while (i < fileName.length && isNaN(parseInt(fileName[i]))) {
            head += fileName[i];
            i++;
        }
        // 2. NUMBER 부분 추출 (최대 5자리)
        let numCount = 0;
        while (i < fileName.length && numCount < 5 && !isNaN(parseInt(fileName[i]))) {
            number += fileName[i];
            i++;
            numCount++;
        }
        
        // 3. 나머지는 TAIL (파싱할 필요 없음)
        
        return {
            head: head.toLowerCase(),
            number: number ? Number(number) : 0,
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