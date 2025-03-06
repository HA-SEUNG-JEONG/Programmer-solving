function solution(n, words) {
    const usedWords = new Set([words[0]]);
    let lastChar = words[0].charAt(words[0].length - 1);
    
    for(let i=1;i<words.length;i++){
        const currentWord = words[i];
        const firstChar = currentWord.charAt(0);
        
        if (firstChar !== lastChar || usedWords.has(currentWord)){
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        usedWords.add(currentWord);
        lastChar = currentWord.charAt(currentWord.length - 1);
    }
    return [0,0];
}