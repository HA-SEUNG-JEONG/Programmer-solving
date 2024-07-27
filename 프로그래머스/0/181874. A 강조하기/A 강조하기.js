function solution(myString) {
    return myString.split('').map(char => 
        char.toLowerCase() === 'a' ? "A" : char.toLowerCase()
    ).join('');
}