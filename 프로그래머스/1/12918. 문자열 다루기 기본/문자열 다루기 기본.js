function solution(s) {
   if(s.length !== 4 && s.length !== 6) return false;
   return !isNaN(s) && s.split('').every(element => !isNaN(Number(element)))
}