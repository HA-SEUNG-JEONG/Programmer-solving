function solution(n, m, section) {
    let result = 0;
    let painted = 0;
    
    for(const point of section){
        if(painted < point){
            result++;
            painted = point+m-1;
        }
    }
    return result;
}