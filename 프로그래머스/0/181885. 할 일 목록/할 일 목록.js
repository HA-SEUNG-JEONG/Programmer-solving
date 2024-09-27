function solution(todo_list, finished) {
    return todo_list.filter((list,index) => !finished[index])
}