function solution(my_string, queries) {
    return queries.reduce((str,[s,e]) => {
        return str.slice(0,s) + str.slice(s, e + 1).split('').reverse().join('') + str.slice(e + 1)
    }, my_string)
}