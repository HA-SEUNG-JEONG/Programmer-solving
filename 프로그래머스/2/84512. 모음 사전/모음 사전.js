function solution(word) {
    const alphabet = ['A','E','I','O','U'];
    const allChar = [];
    
    const createChar = (current,length) => {
        if(length === 0) return;
        
        for(let i=0; i<alphabet.length;i++){
            const newChar = current + alphabet[i];
            allChar.push(newChar);
            createChar(newChar, length - 1);
        }
    }
    
    createChar('',5);
    return allChar.indexOf(word) + 1;
}