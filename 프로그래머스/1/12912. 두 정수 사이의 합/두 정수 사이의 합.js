function solution(a, b) {
   if(a === b) return a;
    
   const min = Math.min(a, b);
   const max = Math.max(a, b);
    
   return (min + max) * (Math.abs(max - min) + 1) / 2;
   
   
}