function solution(num_list) {
    const findMinusNumber = (element) => element < 0;
    return num_list.findIndex(findMinusNumber)
}