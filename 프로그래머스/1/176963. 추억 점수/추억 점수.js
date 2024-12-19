function solution(name, yearning, photo) {
    const result = [];
    // 그리워하는 사람의 이름을 담은 문자열 배열 name, 
    // 각 사람별 그리움 점수를 담은 정수 배열 yearning, 
    // 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo
    const scoreMap = new Map();
    name.forEach((element,index) => {
        scoreMap.set(element,yearning[index]);
    })
    
    return photo.map((persons) => 
        persons.reduce((acc, person) => 
            acc + (scoreMap.get(person) || 0), 0)
    );
}