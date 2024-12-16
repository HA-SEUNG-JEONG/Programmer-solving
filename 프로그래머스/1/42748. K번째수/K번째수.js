function solution(array, commands) {
    return commands.map(([i,j,k]) => {
        const slicedArray = array.slice(i-1,j).sort((a,b) => a-b)[k-1];
        return slicedArray;
    })
}