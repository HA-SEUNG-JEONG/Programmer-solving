function divisor(num){
    const answer = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            answer.push(i);
            if (i * i != num) {
                answer.push(num / i);
            }
        }
    }
    return answer.length;
}
function solution(number, limit, power) {
    let total = 0;
    for(let i=1; i<=number; i++){
        let divisorCount = divisor(i);
        if (divisorCount > limit) total+=power;
        else total += divisorCount;
    }
    return total;
}