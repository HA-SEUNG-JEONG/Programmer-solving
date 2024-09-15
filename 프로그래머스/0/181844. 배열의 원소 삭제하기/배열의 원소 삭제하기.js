function solution(arr, delete_list) {
    const set = new Set(delete_list);
    return arr.filter(item=>!set.has(item))
}