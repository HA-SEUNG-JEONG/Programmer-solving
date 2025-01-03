function solution(n, lost, reserve) {
    // 전체 학생의 수 n
    // 체육복을 도난당한 학생들의 번호가 담긴 배열 lost 
    // 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
    
    // 여벌 체육복이 있는 학생만 다른 학생에게 빌려줄 수 있음
    // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정
    let students = Array(n).fill(1);
    
    lost.forEach(student => students[student-1]--);
    
    reserve.forEach(student => students[student-1]++);
    
    for(let i=0;i<n;i++){
        if(students[i]===0){
            if(i>0 && students[i-1]>1){
                students[i]++;
                students[i-1]--;
            }else if(i<n-1 && students[i+1]>1){
                students[i]++;
                students[i+1]--;
            }
        }
    }
    return students.filter(student => student > 0).length;
}