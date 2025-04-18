function solution(keymap, targets) {
    // 1번 키를 한번 누르면 A, 두번 누르면 B, 세번 누르면 C
    const minPress = new Map();
    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const count = i + 1;
            if (!minPress.has(char) || minPress.get(char) > count) {
                minPress.set(char, count);
            }
        }
    }
    
    return targets.map(target => {
        let total = 0;
        for(const char of target){
            if(!minPress.has(char)) return -1;
            total += minPress.get(char);
        }
        return total;
    })
    
}