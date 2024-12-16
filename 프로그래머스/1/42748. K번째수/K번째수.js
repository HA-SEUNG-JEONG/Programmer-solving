function solution(array, commands) {
    return commands.map(([i,j,k]) => {
        const slicedArray = array.slice(i-1,j);
        const sortedArray = slicedArray.sort((a,b) => a-b);
        return sortedArray[k-1];
    })
}