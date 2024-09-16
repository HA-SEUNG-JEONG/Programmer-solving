function solution(num_list) {
    const lastIndex = num_list.length - 1;
    const lastElement = num_list[lastIndex];
    const secondLastElement = num_list[lastIndex - 1];
    
    let newElement;
    if (lastElement > secondLastElement) {
        newElement = lastElement - secondLastElement;
    } else {
        newElement = lastElement * 2;
    }
    
    return [...num_list, newElement];
}