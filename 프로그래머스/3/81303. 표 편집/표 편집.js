function solution(n, k, cmd) {
    // 한 번에 한 행만 선택 가능
    // 표의 범위(0행 ~ 마지막 행)를 벗어날 수 없음
    // 처음 표의 행 개수를 나타내는 정수 n, 처음에 선택된 행의 위치를 나타내는 정수 k,
    // 'U X' -> 현재 선택된 행에서 X칸 위에 있는 행을 선택
    // 'D X' -> 현재 선택된 행에서 X칸 아래에 있는 행을 선택
    // 'C' -> 현재 선택된 행 삭제 후, 바로 아래 행 선택. 단, 삭제된 행이 가장 마지막 행인 경우 바로 '윗 행' 선택
    // 'Z' -> 가장 최근에 삭제된 행을 원래대로 복구, 단 현재 선택된 행은 바뀌지 않음
    
    // cmd의 각 원소는 "U X", "D X", "C", "Z" 중 하나
    
       // 현재 선택된 위치
    let curIndex = k;
    
    // 삭제된 행을 저장할 스택
    const stack = [];
    
    // 연결 리스트 구조 생성
    const linkedList = {
        up: Array(n).fill().map((_, i) => i - 1),
        down: Array(n).fill().map((_, i) => i + 1)
    };
    
    // 마지막 노드의 down은 -1로 설정
    linkedList.down[n-1] = -1;
    
    for (const command of cmd) {
        if (command === 'C') {
            // 현재 행 삭제
            stack.push([curIndex, linkedList.up[curIndex], linkedList.down[curIndex]]);
            
            // 이전 행과 다음 행 연결
            if (linkedList.up[curIndex] >= 0) {
                linkedList.down[linkedList.up[curIndex]] = linkedList.down[curIndex];
            }
            if (linkedList.down[curIndex] >= 0) {
                linkedList.up[linkedList.down[curIndex]] = linkedList.up[curIndex];
            }
            
            // 다음 선택할 행 결정
            const nextIndex = linkedList.down[curIndex] >= 0 ? linkedList.down[curIndex] : linkedList.up[curIndex];
            curIndex = nextIndex;
            
        } else if (command === 'Z') {
            // 가장 최근 삭제된 행 복구
            const [index, upNode, downNode] = stack.pop();
            
            if (upNode >= 0) {
                linkedList.down[upNode] = index;
            }
            if (downNode >= 0) {
                linkedList.up[downNode] = index;
            }
            
            linkedList.up[index] = upNode;
            linkedList.down[index] = downNode;
            
        } else {
            // U X 또는 D X 명령어 처리
            const [direction, count] = command.split(' ');
            let moveCount = parseInt(count);
            
            while (moveCount > 0) {
                curIndex = direction === 'U' ? linkedList.up[curIndex] : linkedList.down[curIndex];
                moveCount--;
            }
        }
    }
    
    // 결과 문자열 생성
    const answer = new Array(n).fill('O');
    for (const [index] of stack) {
        answer[index] = 'X';
    }
    
    return answer.join('');
    
    // 모든 명령어를 수행한 후 표의 상태와 처음 주어진 표의 상태를 비교하여 삭제되지 않은 행은 O, 삭제된 행은 X
    // 표의 0행부터 n - 1행까지에 해당되는 O, X를 순서대로 이어붙인 문자열 형태로 return
}