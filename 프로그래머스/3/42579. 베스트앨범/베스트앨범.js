// function solution(genres, plays) {
//     // 가장 많이 재생된 노래를 두 개씩 모윽;
//     // 기준
//     // 1. 속한 노래가 많이 재생된 장르 먼저 수록
//     // 2. 장르 내에서 많이 재생된 노래를 먼저 수록
//     // 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 '낮은' 노래를 먼저 수록
    
//     // 노래의 장르를 나타내는 문자열 배열 genres
//     // 재생 횟수를 나타내는 정수 배열 plays
    
//     // 장르 별로 최대 2개
//     // 리턴하는 값은 genres의 고유번호

    
//     const genreMap = {};

//     for (let i = 0; i < genres.length; i++) {
//         const genre = genres[i];
//         if (!genreMap[genre]) {
//             genreMap[genre] = {total : 0, songs: [] };
//         }
//         // genreMap[genre].push(plays[i]);
//         genreMap[genre].total += plays[i];
//         genreMap[genre].songs.push({ id : i, plays: plays[i]}); // 고유번호, 재생 수 저장
//     }
    
//     return Object.entries(genreMap)
//     // 장르별 총 재생 수 정렬
//     .sort((a, b) => b[1].total - a[1].total)
//     // 각 장르 내에서 노래 정렬 및 상위 2개 선택
//     .flatMap(([genre, data]) => {
//         const sortSongByPlays = data.songs.sort((a, b) => b.plays - a.plays); //
//         const slicedSongs = sortSongByPlays.slice(0,2); // 최대 2개까지
//         const mappedSongs = slicedSongs.map(slicedSong => slicedSong.id); // 고유 번호
//         return mappedSongs;
//     });

    
    
// }

function solution(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  // ➊ 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
  for (let i = 0; i < genres.length; i++) {
    genre = genres[i];
    play = plays[i];

    if (!(genre in genresObj)) {
      genresObj[genre] = [];
      playObj[genre] = 0;
    }

    genresObj[genre].push([i, play]);
    playObj[genre] += play;
  }

  // ➋ 총 재생 횟수가 많은 장르순으로 정렬
  sortedGenres = Object.keys(playObj).sort((a, b) => {
    return playObj[b] - playObj[a];
  });

  // ➌ 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
  for (const genre of sortedGenres) {
    sortedSongs = genresObj[genre].sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });

    answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
  }

  return answer;
}