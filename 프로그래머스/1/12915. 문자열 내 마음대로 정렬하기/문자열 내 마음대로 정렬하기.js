function solution(strings, n) {
    return strings.sort((prev, next) => {
        if(prev[n] === next[n]){
            return prev.localeCompare(next);
        }
        return prev[n].localeCompare(next[n]);
    })

}