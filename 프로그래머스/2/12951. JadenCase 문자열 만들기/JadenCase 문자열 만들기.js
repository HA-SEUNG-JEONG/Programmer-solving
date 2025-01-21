function solution(s) {
    const splitted = s.split(' ');
    return splitted.map(str => str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()).join(' ');

}