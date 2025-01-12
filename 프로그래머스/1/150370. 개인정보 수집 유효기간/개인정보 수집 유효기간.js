function solution(today, terms, privacies) {
    // 1~n 번으로 분류되는 개인정보 n개
    // 모든 달은 28일까지 있다고 가정
    // 개인정보 수집 일자 + 유효기간 > 오늘 일자면 개인정보 파기
    // terms의 원소는 "약관 종류 유효기간" 형태의 약관 종류와 유효기간을 공백 하나로 구분한 문자열
    // terms.map(term => {
    //     const type = term.split(' ')[0]
    //     const period = term.split(' ')[1];
    // })
    
    const termsObj = {};
    
    // const type = terms.map(term => term.split(' ')[0]);
    // const period = terms.map(term => term.split(' ')[1]); // 유효기간
    
    terms.forEach(term => {
        const [type,period] = term.split(' ');
        termsObj[type] = Number(period);
    });
    
    // 날짜 => 일수
    const getDays = (date) => {
        const [year, month, day] = date.split('.').map(Number);
        // console.log(year,month,day);
        return year*12*28 + month*28 + day;
    }
    
    const todayDays = getDays(today);
    
    // 파기해야 할 개인정보 찾기
    return privacies
    .map((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const expireDays = getDays(date) + (termsObj[type] * 28);
        return todayDays >= expireDays ? index + 1 : null;
    })
    .filter(index => index !== null);
    
    
    // console.log(type,period)
    
    
//     // privacies[i]는 i+1번 개인정보의 수집 일자와 약관 종류
//     // privacies의 원소는 "날짜 약관 종류" 형태의 날짜와 약관 종류를 공백 하나로 구분한 문자열
//     for(let i=0;i<privacies.length;i++){
//         const [date,type] = privacies[i].split(' ') 
//         // date : 개인정보 수집 일자

//     }
    
//     // MM, DD의 경우 한 자리 수일때 앞에 0이 붙음
    
//     // 파기해야 할 개인정보만 배열에 담아서 리턴해야 함
    
}