const readline = require('readline');
const fs = require('fs');

if (!process.argv[2]) {
    console.log('tolong sertakan nama file');
    process.exit(1);
}
console.log(process.argv[2]);

let soal = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ' Tebakan : '
});


let count = 0;
let wrong = 0;
console.log('Selamat datang di permainan tebak kata');

console.log(soal[count].definition);
rl.prompt();

rl.on('line', (answer) => {
    if (answer.toLowerCase() == 'skip') {
        soal.push(soal[count])
        count++;
        console.log(soal[count].definition);

    } else {
        if (answer.toLowerCase() == soal[count].term.toLowerCase()) {
            console.log('selamat anda benar')
            wrong = 0;
            count++;
            if (count == soal.length) {
                console.log('Selamat anda menang');
                rl.close();
            }
            console.log(soal[count].definition);
        } else {
            console.log('wwkwkwk anda kurang beruntung');
            wrong++;
            console.log(`Anda telah salah sebanyak ${wrong}`);
        }
    }
    rl.prompt();

}).on('close', () => {
    console.log('Berkunjung lagi ya..');
    process.exit(0);
});
