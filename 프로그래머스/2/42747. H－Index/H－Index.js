function solution(citations) {
    const sortedCitations = citations.sort((a,b) => b - a);
    let h=0;
    for(let i=0; i<sortedCitations.length; i++){
        if(sortedCitations[i] >= i+1) {
            h = i + 1;
        }
        else {
            break;
        }
    }
    return h;
}