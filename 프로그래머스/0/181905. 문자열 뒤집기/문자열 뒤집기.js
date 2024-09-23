function solution(my_string, s, e) {
    const arr = my_string.split('');
    
    const reversed = arr.slice(s,e+1).reverse();
    arr.splice(s,e-s+1,...reversed);
    return arr.join('')
}