function solution(s) {
    const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let result = '';
        let temp = '';

        for (let char of s) {
            // 숫자면 그대로 추가
            if (!isNaN(char)) {
                result += char;
            } else {
                // temp가 numWords 배열에 있는 단어와 일치하면, 해당 단어의 인덱스(숫자 값)를 result에 추가하고 temp를 초기화
                temp += char;
                if (numWords.includes(temp)) {
                    result += numWords.indexOf(temp);
                    temp = '';
                }
            }
        }

        return Number(result);

    // 다른 방법
//     const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//     for(let i=0; i< numbers.length; i++) {
//         let arr = s.split(numbers[i]);
//         s = arr.join(i);
//     }

//     return Number(s);


}