function solution(num_list, n) {
    return num_list.filter((_,index)=>index % n === 0);
}