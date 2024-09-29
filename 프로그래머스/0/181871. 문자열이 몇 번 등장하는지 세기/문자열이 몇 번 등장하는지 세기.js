function solution(myString, pat) {
    let count = 0;
    const patLength = pat.length;

    for (let i = 0; i <= myString.length - patLength; i++) {
        if (myString.slice(i, i + patLength) === pat) count++;
    }

    return count;
}