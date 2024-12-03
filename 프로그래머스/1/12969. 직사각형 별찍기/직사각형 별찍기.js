const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const [n, m] = line.split(' ').map(Number);

    const starLine = '*'.repeat(n);

    for (let i = 0; i < m; i++) {
        console.log(starLine);
    }

    rl.close();
});