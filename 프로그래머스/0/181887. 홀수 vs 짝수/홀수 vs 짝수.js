function solution(num_list) {
    // 가장 첫번째 원소를 1번 원소
    // 홀수 번째 원소들의 합과 짝수 번째 원소들의 합을 비교해서 큰 값을 return
    const odd = num_list.filter((_,index) => index % 2 === 1).reduce((acc,cur)=>acc+cur)
    const even = num_list.filter((_,index) => index % 2 === 0).reduce((acc,cur)=>acc+cur)
    
    if(odd === even) return odd;
    return odd > even ? odd : even;
}