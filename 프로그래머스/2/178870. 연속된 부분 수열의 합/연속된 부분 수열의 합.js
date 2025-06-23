function solution(sequence, k) {
    let left = 0;
    let sum = 0;
    let result = [0, sequence.length - 1];
    let minLength = Infinity;

    for (let right = 0; right < sequence.length; right++) {
        sum += sequence[right];
        
        while (sum > k) {
            sum -= sequence[left];
            left++;
        }
        
        if (sum === k) {
            const currentLength = right - left;
            if (currentLength < minLength) {
                minLength = currentLength;
                result = [left, right];
            }
        }
    }
    
    return result;
}