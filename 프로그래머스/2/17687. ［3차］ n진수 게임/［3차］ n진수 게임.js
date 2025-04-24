function solution(n, t, m, p) {
    let res = ''
    let num = 0
    let seq = ''
    while (res.length < t) {
        if (seq.length >= m) {
            res += seq[p - 1]
            seq = seq.slice(m)
        }
        else {
            seq += num.toString(n).toUpperCase()
            num++
        }
    }
    return res
}