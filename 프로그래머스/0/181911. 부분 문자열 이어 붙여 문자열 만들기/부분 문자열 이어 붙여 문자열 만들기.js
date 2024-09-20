function solution(my_strings, parts) {
    return my_strings.reduce((result,str,index) => {
    const [s,e]=parts[index];
        return result + str.slice(s,e+1)
    },'')
}