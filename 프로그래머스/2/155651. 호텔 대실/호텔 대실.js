function solution(book_time) {
    // 시간을 분으로 변환하는 도우미 함수
    const hoursToMinute = (time) => {
        const [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute;
    };

    // 1. 예약 시작 시간을 기준으로 오름차순 정렬
    book_time.sort((a, b) => {
        const aStart = hoursToMinute(a[0]);
        const bStart = hoursToMinute(b[0]);
        return aStart - bStart;
    });

    // 2. 종료 시간을 저장할 배열 (항상 오름차순으로 유지)
    const endTimes = [];
    let maxRooms = 0;

    // 3. 각 예약에 대해 반복
    for (const [start, end] of book_time) {
        const startTime = hoursToMinute(start);
        const endTime = hoursToMinute(end) + 10; // 청소 시간 10분 추가

        // 4. 이진 탐색으로 현재 예약 시작 시간 이전에 끝나는 방 찾기
        let left = 0;
        let right = endTimes.length - 1;
        let found = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (endTimes[mid] <= startTime) {
                found = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // 5. 재사용 가능한 방이 있으면 업데이트, 없으면 새 방 추가
        if (found !== -1) {
            endTimes.splice(found, 1);
        }

        // 6. 종료 시간을 이진 삽입으로 정렬된 위치에 추가
        let insertPos = 0;
        left = 0;
        right = endTimes.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (endTimes[mid] < endTime) {
                left = mid + 1;
                insertPos = left;
            } else {
                right = mid - 1;
                insertPos = right + 1;
            }
        }
        endTimes.splice(insertPos, 0, endTime);

        // 7. 최대 방 개수 갱신
        maxRooms = Math.max(maxRooms, endTimes.length);
    }

    return maxRooms;
}