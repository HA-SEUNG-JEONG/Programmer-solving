function solution(n, words) {
    const usedWords = new Set([words[0]]);
    let lastChar = words[0].charAt(words[0].length - 1);
    
    for(let i=1;i<words.length;i++){
        const currentWord = words[i];
        const firstChar = currentWord.charAt(0);
        
        
        
        if(currentWord.length === 1 || firstChar !== lastChar || usedWords.has(currentWord)){
            const personNumber = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [personNumber, turn];
        }
        
        usedWords.add(currentWord);
        lastChar = currentWord.charAt(currentWord.length - 1);
    }
    
    // 주어진 단어들로 탈락자 생기지 않으면
    return [0,0];
}