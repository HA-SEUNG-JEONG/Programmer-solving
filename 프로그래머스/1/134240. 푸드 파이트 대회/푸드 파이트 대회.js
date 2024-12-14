function solution(food) {
    // food[0]은 준비한 물의 양
    // food[i]은 i번 음식의 수
    
    let result = ''
    for(let i=1;i<food.length;i++){
        const count = Math.floor(food[i]/2);
        result += String(i).repeat(count);
    }
    return `${result}0${result.split('').reverse().join('')}`
}