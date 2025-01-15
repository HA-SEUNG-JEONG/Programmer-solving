function solution(board, moves) {
    const basket = [];
    let result = 0;
    
    moves.forEach(move => {
        const col = move - 1;
        for(let i=0;i<board.length;i++){
            if(board[i][col] !== 0){
                const doll = board[i][col];
                board[i][col] = 0;
                
                if(basket.at(-1) === doll){
                    basket.pop();
                    result+=2;
                }
                else{
                    basket.push(doll);
                }
                break;
            }
         }
        
    })
    return result;
}