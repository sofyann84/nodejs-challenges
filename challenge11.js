const readline = require('readline');
const fs = require('fs');

const soal = JSON.parse(fs.readFileSync('soal.json', 'utf8'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ' Tebakan : '
});


let count = 0;
console.log('Selamat datang di permainan tebak kata silakan isi dengan jawaban yang benar ya!');

console.log(soal[0].definition);
rl.prompt();

rl.on('line', (answer) => {
    if (answer.toLowerCase() == soal[count].term.toLowerCase()) {
        console.log('selamat anda benar')
        count++;
        if(count == soal.length){
            console.log('\n horeeee anda menang');
            rl.close(0);
        }
        console.log(soal[count].definition);
    } else {
        console.log('wwkwkwk, anda kurang beruntung')
    }

    rl.prompt();

}).on('close', () => {
    console.log('Berkunjung lagi ya..');
    process.exit(0);
});