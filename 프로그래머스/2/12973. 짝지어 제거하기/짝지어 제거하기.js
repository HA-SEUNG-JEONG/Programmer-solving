function solution(s)
{
    // 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾기
    // 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙이기
    // 짝지어 제거할 수 있으면 1을, 아니면 0을 리턴
    
    const stack = [];
    // let isPair = false;
    // const sorted = s.split('').sort(); -> 문자열을 정렬하면 원래의 순서가 깨져서 연속된 문자쌍을 찾을 수 없게 됩니다
    // for(let i=0;i<s.length;i++){
    //     // 짝을 지으려면 같은 문자가 연속된 인덱스 관계여야 함
    //     // 알파벳 정렬을 해야하나..?
    // 첫 번째 비교에서 바로 return을 하므로 전체 문자열을 검사하지 못합니다
    //     if(sorted[i] === sorted[i+1]){
    //         isPair = true;
    //         return 1;
    //     }else {
    //         isPair = false;
    //         return 0;
    //     }
    // }
    
    for(let char of s){
        if(stack.length > 0 && stack.at(-1) === char){
            stack.pop();
        }else{
            stack.push(char)
        }
    }
    return stack.length === 0 ? 1 : 0;
}
