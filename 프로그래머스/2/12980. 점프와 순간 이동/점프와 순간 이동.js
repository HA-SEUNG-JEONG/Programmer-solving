function solution(n)
{
//     const binary = n.toString(2);
//     const oneCount = binary.split("1").length - 1;

//     return oneCount;
    
    // 다른 답
    return n.toString(2).split('').filter(el => el === '1').length;
}