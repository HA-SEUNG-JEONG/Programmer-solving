function solution(fees, records) {
    // 기본 시간(분)	기본 요금(원)	단위 시간(분)	단위 요금(원)
    // 180	         5000	       10	         600
    
    // 어떤 차량이 입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주합니다.
    // 00:00부터 23:59까지의 입/출차 내역을 바탕으로 차량별 누적 주차 시간을 계산하여 요금을 일괄로 정산
    
    // fees : 주차 요금을 나타내는 정수 배열
    // records : 자동차의 입/출차 내역을 나타내는 문자열 배열
    
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    const inCars = new Map();
    const totalTime = new Map();
    
    for (const record of records) {
        const [time, carNumber, type] = record.split(" ");
        const minutes = convertToMinutes(time);

        if (type === "IN") {
            inCars.set(carNumber, minutes);
        } else {
            // OUT
            const inTime = inCars.get(carNumber);
            const parkingTime = minutes - inTime;

            // 기존 누적 시간에 더하기
            totalTime.set(carNumber, (totalTime.get(carNumber) || 0) + parkingTime);
            inCars.delete(carNumber); // 출차 처리
        }
    }
    
    const lastTime = 23 * 60 + 59; // 23:59를 분으로 변환
    for (const [carNumber, inTime] of inCars.entries()) {
        const parkingTime = lastTime - inTime;
        totalTime.set(carNumber, (totalTime.get(carNumber) || 0) + parkingTime);
    }
    
    const sortedCars = Array.from(totalTime.entries()).sort(
        (a, b) => a[0] - b[0]
    );

    // 4. 요금 계산
    return sortedCars.map(([_, totalMinutes]) => {
        if (totalMinutes <= defaultTime) return defaultFee;
        return (
            defaultFee +
            Math.ceil((totalMinutes - defaultTime) / unitTime) * unitFee
        );
    });
    
    function convertToMinutes(timeStr) {
        const [hours, minutes] = timeStr.split(":").map(Number);
        return hours * 60 + minutes;
    }

    
}