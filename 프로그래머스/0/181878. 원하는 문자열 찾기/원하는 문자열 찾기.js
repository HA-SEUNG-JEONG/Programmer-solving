function solution(myString, pat) {
    const myStringUpperCase = myString.toUpperCase();
    const patUpperCase = pat.toUpperCase()
    return myStringUpperCase.includes(patUpperCase) ? 1 : 0;
}