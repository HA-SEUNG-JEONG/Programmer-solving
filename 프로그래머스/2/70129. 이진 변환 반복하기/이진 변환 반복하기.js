function solution(s) {
    let transformCount = 0;
    let zeroCount = 0;
    
//     while(s !== '1'){
//         const splitted = s.split('0').join("");
//         const transform = Number(splitted.length).toString(2);
//         // console.log(transform)
//         // if(splitted === 1){
//         //     break;
//         // }
//         console.log(splitted)
//         console.log(transform)

//     }
    
    while(s !== '1'){
        const beforeLength = s.length;
        s = s.split('0').join('');
        
        zeroCount += beforeLength - s.length;
        
        s = s.length.toString(2);
        transformCount++;
    }
    
    return [transformCount, zeroCount];
    

    
}