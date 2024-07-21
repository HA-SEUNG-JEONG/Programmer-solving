function solution(myString, pat) {
    const swap = char => char === 'A' ? 'B' : 'A';
    
    return myString.split('').map(swap).join('').includes(pat) ? 1 : 0;
}