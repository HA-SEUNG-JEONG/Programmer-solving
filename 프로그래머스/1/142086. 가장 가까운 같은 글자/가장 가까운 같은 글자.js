function solution(s) {
    // 자신 앞에 같은 글자가 있는지 판단
    const result = [];
    const lastSeen = {};
    
    for(let i=0; i<s.length; i++){
        const char = s[i];
        
        if(char in lastSeen){
            result.push(i-lastSeen[char]);
        }else{
            result.push(-1);
        }
        lastSeen[char] = i;
    }
    return result;
}