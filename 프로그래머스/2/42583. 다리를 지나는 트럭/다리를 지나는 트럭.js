function solution(bridge_length, weight, truck_weights) {
    // 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다.
    let time = 0;
    // 다리 위의 트럭을 나타내는 큐
    const bridge = new Array(bridge_length).fill(0);
    let totalWeight = 0;
    let waitIndex = 0;

    // 대기 중인 트럭이 남아있거나 다리 위에 트럭이 있는 동안 반복
    while (waitIndex < truck_weights.length || totalWeight > 0) {
        const exited = bridge.shift();
        totalWeight -= exited;
        // 다음 트럭이 다리에 올라갈 수 있는지 확인
        if (
            waitIndex < truck_weights.length &&
            totalWeight + truck_weights[waitIndex] <= weight
        ) {
            // 트럭이 다리에 올라감
            const currentTruck = truck_weights[waitIndex];
            bridge.push(currentTruck);
            totalWeight += currentTruck;
            waitIndex++;
        } else {
            // 다리에 트럭이 없으면 0 추가
            bridge.push(0);
        }
        time++;
    }
    return time;
}
