function solution(k, scores) {
    // 프로그램 시작 이후 초기 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오름
// k일 다음부터는 출연 가수의 점수가 기존 명예의 전당 목록의 k번째 순위의 가수 점수보다 높으면 출연 가수의 점수가 명예의 전당, 기존 k번째 순위 점수는 명예의 전당에서 내려옴
    // k : 명예의 전당 목록의 점수 개수
    // score : 1일부터 마지막날까지 출연한 가수들 점수
    // 매일 발표된 명예의 전당의 최하위 점수를 리턴
    const result = [];
    
    return scores.map(score => {
        result.push(score);
        result.sort((a,b) => b-a);
        if(result.length > k){
            result.pop();
        }
        return result[result.length-1];
    })
}