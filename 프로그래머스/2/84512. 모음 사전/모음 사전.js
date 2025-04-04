function solution(word) {
      const alphabet = "AEIOU";

    // 각 자리수별 가중치 계산
    // 첫 번째 자리: 한 글자가 변할 때마다 781개의 단어를 건너뜀
    // 두 번째 자리: 한 글자가 변할 때마다 156개의 단어를 건너뜀
    // 세 번째 자리: 한 글자가 변할 때마다 31개의 단어를 건너뜀
    // 네 번째 자리: 한 글자가 변할 때마다 6개의 단어를 건너뜀
    // 다섯 번째 자리: 한 글자가 변할 때마다 1개의 단어를 건너뜀
    const weight = [781, 156, 31, 6, 1];

    let location = 0;

    // 단어의 각 글자에 대해 location 계산
    for (let i = 0; i < word.length; i++) {
        const index = alphabet.indexOf(word[i]);
        location += index * weight[i] + 1;
    }

    return location;
}