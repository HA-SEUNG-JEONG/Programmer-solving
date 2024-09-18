function solution(numLog) {
    const diffToChar = {
        1: 'w',
        '-1': 's',
        10: 'd',
        '-10': 'a'
    };
    
    const result = new Array(numLog.length - 1);
    
    for (let i = 1; i < numLog.length; i++) {
        result[i-1] = diffToChar[numLog[i] - numLog[i-1]];
    }
    
    return result.join('');
}