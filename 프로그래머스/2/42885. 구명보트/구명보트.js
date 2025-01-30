function solution(people, limit) {
    // 최대 2명, 1명만 타도 됨
    // let count = 0;
    // for(let i=0;i<people.length;i++){
    //     for(let j=i;j<people.length;j++){
    //         if(people[i] > limit || people[j] > limit) return
    //         else if(people[i] <= limit || people[j] <= limit) count++;
    //         else if(people[i] + people[j] <= limit){
    //             count++;
    //         }
    //     }
    // }
    // return count;
    people.sort((a,b) => a-b);
    let count = 0;
    let left = 0;
    let right = people.length - 1;
    
    while(left <= right){
        if(people[left] + people[right] <= limit){
            left++;
        }
        right--;
        count++;
    }
    return count;
}