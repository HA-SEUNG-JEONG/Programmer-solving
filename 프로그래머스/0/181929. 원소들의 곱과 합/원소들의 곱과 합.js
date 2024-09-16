function solution(num_list) {
    const multiply = num_list.reduce((acc,cur) => acc*cur);
    const add = num_list.reduce((acc,cur) => acc+cur);
    
    if(multiply < Math.pow(add,2)){
        return 1;
    }
    else{
        return 0;
    }
}