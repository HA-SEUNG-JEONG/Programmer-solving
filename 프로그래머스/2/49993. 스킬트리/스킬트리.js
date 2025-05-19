function solution(skill, skill_trees) {
    let result = 0;
    // skill_trees의 각 요소는 무조건 skill의 첫번째 요소를 포함해야 함
    skill_trees.forEach((tree) => {
        const filtered = [...tree].filter(tr => skill.includes(tr)).join('');
        if(skill.startsWith(filtered)) result++;
    })
    return result;
}