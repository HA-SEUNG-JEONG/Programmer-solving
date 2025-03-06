function solution(nums) {
    const maxLength = nums.length / 2;
    
    const set = new Set(nums).size
    return Math.min(maxLength,set);
}