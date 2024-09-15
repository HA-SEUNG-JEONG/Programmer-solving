function solution(num_list, n) {
    const copied = num_list.slice();
    return copied.splice(n-1)
}