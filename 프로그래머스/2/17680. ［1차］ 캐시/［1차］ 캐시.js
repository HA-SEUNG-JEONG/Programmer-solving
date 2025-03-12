function solution(cacheSize, cities) {
    // cities는 도시 이름으로 이뤄진 문자열 배열
    // cache hit -> 실행시간 1, cache miss -> 실행시간 5
    
    // DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정
    let time = 0;
    const cache = [];
    
    cities.forEach(city => {
        const cityLowerCase = city.toLowerCase();
        if(cache.includes(cityLowerCase)) {
            time += 1;
            cache.splice(cache.indexOf(cityLowerCase), 1)
        } else {
            time+=5;
        }
        
        cache.push(cityLowerCase);
        
        if(cache.length > cacheSize) {
            cache.shift();
        }
        
    });
    
    return time;
}