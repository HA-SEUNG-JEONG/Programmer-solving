function solution(my_string, index_list) {
    return index_list.map(list => my_string[list]).join('')
}