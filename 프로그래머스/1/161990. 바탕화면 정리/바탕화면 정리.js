function solution(wallpaper) {
    // [0,0]부터 시작 [세로,가로]
    // let [x,y] = [0,0];
    // 빈 칸은 '.', 파일이 있는 칸은 '#'
    // 최소한의 이동거리를 갖는 한번의 드래그
    
    // 점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때 
    // "드래그 한 거리"는 |rdx - lux| + |rdy - luy|
//     let empty = 0;
//     let file = 1;
    
//     wallpaper.forEach(paper => {
//         const file = paper.split('.').filter(element => element !== '');
//         const empty = paper.split('#').filter(element => element !== '');
//     });
    
    // 좌표에 배치..
    
    let lux = wallpaper.length;
    let luy = wallpaper[0].length;
    let rdx = 0;
    let rdy = 0;
    
    for(let i=0;i<wallpaper.length;i++){
        for(let j=0;j<wallpaper[i].length;j++){
            if(wallpaper[i][j] === '#'){
                lux = Math.min(lux,i);
                luy = Math.min(luy,j);
                rdx = Math.max(rdx,i+1);
                rdy = Math.max(rdy, j + 1);
            }
        }
    }
    return [lux, luy, rdx, rdy]
}