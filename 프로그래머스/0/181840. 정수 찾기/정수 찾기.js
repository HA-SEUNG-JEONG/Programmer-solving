function solution(num_list, n) {
    const list = num_list.some(list => list === n)
    return list === true ? 1 : 0;
}