function solution(arr) {
    const firstIndex = arr.indexOf(2);
    const lastIndex = arr.lastIndexOf(2);

    return arr.includes(2) ? arr.slice(firstIndex, lastIndex + 1) : [-1];
}