function solution(myString) {
    return myString.split('x').filter(list => list !== '').sort()
}