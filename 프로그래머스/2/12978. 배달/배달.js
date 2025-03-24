function solution(N, road, K) {
    // 그래프 생성 (인접 리스트)
    const graph = Array.from({ length: N + 1 }, () => []);
    const distances = Array(N + 1).fill(Infinity);

    // 도로 정보 설정 (양방향)
    for (const [a, b, c] of road) {
        graph[a].push({ node: b, dist: c });
        graph[b].push({ node: a, dist: c });
    }

    // 다익스트라 알고리즘
    function dijkstra(start) {
        // 우선순위 큐 역할을 할 배열 (거리가 짧은 순으로 정렬)
        const pq = [];

        // 시작점 설정
        distances[start] = 0;
        pq.push({ node: start, dist: 0 });

        while (pq.length > 0) {
            // 현재 가장 거리가 짧은 노드 선택
            pq.sort((a, b) => a.dist - b.dist);
            const { node, dist } = pq.shift();

            // 현재 노드의 거리가 이미 처리된 거리보다 크면 무시
            if (distances[node] < dist) continue;

            // 인접 노드 탐색
            for (const { node: nextNode, dist: nextDist } of graph[node]) {
                const totalDist = dist + nextDist;

                // 더 짧은 경로를 찾은 경우 업데이트
                if (totalDist < distances[nextNode]) {
                    distances[nextNode] = totalDist;
                    pq.push({ node: nextNode, dist: totalDist });
                }
            }
        }
    }

    // 1번 마을에서 시작하는 다익스트라 알고리즘 실행
    dijkstra(1);

    // K 이하의 시간에 배달 가능한 마을 수 계산
    return distances.filter((dist) => dist <= K).length;
}