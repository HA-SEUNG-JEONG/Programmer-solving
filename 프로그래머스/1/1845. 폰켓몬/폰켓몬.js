function solution(nums) {
    // nums의 length 구하기
    // N/2마리를 구하기 위해 nums.length / 2 처리
    const maxSelect = nums.length / 2;
    
    const set = new Set(nums).size;
    return Math.min(maxSelect,set)
    
    // 가장 많은 종류의 폰켓몬을 선택하는 방법의 개수(최댓값)
    // set이 maxSelect보다 큰 경우도 있는 부분 고려
}