function solution(n) {
    const reverseToStringThree = n.toString(3).split('').reverse().join('')
    return parseInt(reverseToStringThree,3)
}