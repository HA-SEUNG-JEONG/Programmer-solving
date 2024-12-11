function solution(s, n) {
     const lower = 'abcdefghijklmnopqrstuvwxyz';
     const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
     const shiftLower = lower.slice(n) + lower.slice(0,n);
    const shiftUpper = upper.slice(n) + upper.slice(0,n);
    
  return s.split('').map(char => {
      if(char === ' ') return char;
      const alphabet = lower.includes(char) ? shiftLower : shiftUpper;
      return alphabet[char.toLowerCase().charCodeAt(0)-97]
  }).join('')
    
}