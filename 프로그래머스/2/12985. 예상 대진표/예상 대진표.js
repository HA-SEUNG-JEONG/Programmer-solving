function solution(n,a,b)
{
    // 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 return
    
    // 트리를 미리 배치?
    
    let answer = 0;
    while(a !== b){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}