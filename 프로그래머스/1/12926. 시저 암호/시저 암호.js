function solution(s, n) {
 return s.split('').map(char => {
    if (char === ' ') return char;
    const code = char.charCodeAt(0);
    const isUpperCase = code >= 65 && code <= 90;
    const base = isUpperCase ? 65 : 97;
    return String.fromCharCode((code - base + n) % 26 + base);
  }).join('');
}