function solution(lottos, win_nums) {
    const rankMapping = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6};
    const unknownLottoNumber = lottos.filter(lotto => lotto === 0).length;
    const matchCount = lottos.filter(lotto => win_nums.includes(lotto)).length;
    
    const maxRank = rankMapping[unknownLottoNumber+matchCount];
    const minRank = rankMapping[matchCount];
    
    return [maxRank, minRank];
}