function solution(nums) {
 const findAllSums = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          result.push(nums[i] + nums[j] + nums[k]);
        }
      }
    }
    return result;
  };

  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  const sums = findAllSums(nums);
  return sums.filter(isPrime).length;
}