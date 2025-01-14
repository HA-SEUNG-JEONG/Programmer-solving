function solution(id_list, report, k) {
    // k번 이상 신고된 유저는 게시판 이용이 정지
    // 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송
    // 이용자의 ID가 담긴 문자열 배열 id_list
    // 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report
    // 정지 기준이 되는 신고 횟수 k
    // 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 리턴
    
    // report의 원소는 "이용자id 신고한id"형태의 문자열
    
    // 유저ID(key)와 신고횟수(value)를 담을 객체 필요
    
//     const reportMap = new Map();
//     const mailCount = new Map()
    
//     id_list.forEach(id => {
//         reportMap.set(id, new Set());
//         mailCount.set(id,0)
//     })
    
//     report.forEach((rep) => {
//         const [userId, reportId] = rep.split(' '); // userId가 reportId를 신고
//         // 신고를 한 경우 해당 신고를 한 userId를 키로 담아서 value 카운트..

//         reportMap.get(reportId).add(userId)
//     });
    
    
//     reportMap.forEach((report,userId) => {
//         if(report.size >= k){
//             report.forEach(reporter => {
//                 mailCount.set(reporter,mailCount.get(reporter)+1);
//             });
//         }
//     })
    
//     return id_list.map(id => mailCount.get(id))
    
     const reports = {};
    const counts = {};
    const mails = {};
    
    id_list.forEach(id => {
        reports[id] = new Set();
        counts[id] = 0;
        mails[id] = 0;
    });
    
    report.forEach(r => {
        const [reporter, reported] = r.split(' ');
        if (!reports[reporter].has(reported)) {
            reports[reporter].add(reported);
            counts[reported]++;
        }
    });
    
    for (const id in counts) {
        if (counts[id] >= k) {
            for (const reporter in reports) {
                if (reports[reporter].has(id)) {
                    mails[reporter]++;
                }
            }
        }
    }
    
    return id_list.map(id => mails[id]);
    

}