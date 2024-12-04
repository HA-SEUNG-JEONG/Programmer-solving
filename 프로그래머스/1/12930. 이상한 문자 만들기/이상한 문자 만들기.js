function solution(s) {
    let result = '';
    let index = 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i] === ' '){
            result += ' ';
            index = 0;
            continue;
        }
        
        if(index % 2 === 0){
            result += s[i].toUpperCase();
        }else{
            result += s[i].toLowerCase();
        }
        index++;
    }
    return result;
}