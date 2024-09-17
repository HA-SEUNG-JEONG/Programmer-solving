function solution(my_strings, parts) {
    return my_strings.map((str,index) => {
        const [start,end] = parts[index];
        return str.slice(start, end+1);
    }).join('')
}