function solution(board, moves) {
    // 게임 화면은 1*1 크기의 칸들로 이루어진 N*N 크기의 정사각 격자
    // 인형이 없는 칸은 빈칸
    // 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올리 수 있음
    // 바구니에 쌓일 때는 가장 아래 칸부터 인형이 순서대로 쌓이게 된다.
    
    // 같은 모양인형 2개가 연속해서 쌓이면 터지면서 바구니에서 사라짐
    
    // board 배열은 2차원 배열
    // board 각 칸
    // 0은 빈 칸
    const basket = [];
    let result = 0;
//     for(let i=0;i<board.length;i++){
//         for(let j=0;j<board.length;j++){
//             // console.log(board[i][j])
//                 basket.push(board[i][j]);

            
//         }
//     }
    moves.forEach(move => {
        const col = move - 1;
        for(let i=0; i<board.length;i++){
            if(board[i][col] !== 0){
                const doll = board[i][col];
                board[i][col]=0;
                
                if(basket.at(-1) === doll){
                    basket.pop();
                    result+=2;
                }else{
                    basket.push(doll)
                }
                break;
            }
        }
    })
    return result;
}