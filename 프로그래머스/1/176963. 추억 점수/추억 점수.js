function solution(name, yearning, photo) {
        const scoreMap = new Map(name.map((n, i) => [n, yearning[i]]));
    
    return photo.map(people => {
        let score = 0;
        for (let person of people) {
            score += scoreMap.get(person) || 0;
        }
        return score;
    });
}