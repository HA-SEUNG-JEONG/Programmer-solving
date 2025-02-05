function solution(genres, plays) {
    // 가장 많이 재생된 노래를 두 개씩 모윽;
    // 기준
    // 1. 속한 노래가 많이 재생된 장르 먼저 수록
    // 2. 장르 내에서 많이 재생된 노래를 먼저 수록
    // 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 '낮은' 노래를 먼저 수록
    
    // 노래의 장르를 나타내는 문자열 배열 genres
    // 재생 횟수를 나타내는 정수 배열 plays
    
    // 장르 별로 최대 2개
    // 리턴하는 값은 genres의 고유번호

    
    const genreMap = {};

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        if (!genreMap[genre]) {
            genreMap[genre] = {total : 0, songs: [] };
        }
        // genreMap[genre].push(plays[i]);
        genreMap[genre].total += plays[i];
        genreMap[genre].songs.push({ id : i, plays: plays[i]});
    }
    
    return Object.entries(genreMap)
    // 장르별 총 재생 수 정렬
    .sort((a, b) => b[1].total - a[1].total)
    // 각 장르 내에서 노래 정렬 및 상위 2개 선택
    .flatMap(([genre, data]) => {
        return data.songs
            .sort((a, b) => b.plays - a.plays)
            .slice(0, 2)
            .map(song => song.id);
    });

    
    
}