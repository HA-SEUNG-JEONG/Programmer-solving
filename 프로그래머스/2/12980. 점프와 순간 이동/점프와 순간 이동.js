function solution(n)
{
    const binary = n.toString(2);
    const oneCount = binary.split("1").length - 1;

    return oneCount;
}