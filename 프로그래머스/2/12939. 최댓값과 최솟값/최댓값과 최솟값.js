function solution(s) {
   const splitedNumber = s.split(' ').map(Number);
   return `${Math.min(...splitedNumber)} ${Math.max(...splitedNumber)}`
}