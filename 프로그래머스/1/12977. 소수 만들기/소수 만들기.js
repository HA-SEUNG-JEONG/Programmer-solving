const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function solution(nums) {
    let result = 0;
    nums.sort((a,b) => a-b);
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(isPrime(nums[i]+nums[j]+nums[k])) result++;
            }
        }
    }
    return result;
}