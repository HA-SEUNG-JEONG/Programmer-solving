function solution(myString) {
    let result = '';
    for (let i = 0; i < myString.length; i++) {
        result += myString[i] < 'l' ? 'l' : myString[i];
    }
    return result;
}