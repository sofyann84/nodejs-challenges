const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ' Tulis Kalimatmu Disini > '
});

rl.prompt();

rl.on('line', (answer) => {
  console.log(`hasil konversi : '${sentenceManipulation(answer)}'`);
  rl.prompt();

}).on('close', () => {
  console.log('Good Bye');
  process.exit(0);
});

function stringManipulation(word) {
  if (word[0].toLowerCase() == 'a' ||
    word[0].toLowerCase() == 'i' ||
    word[0].toLowerCase() == 'u' ||
    word[0].toLowerCase() == 'e' ||
    word[0].toLowerCase() == 'o') {
    return word;
  } else {
    return word.slice(1) + word[0] + 'nyo'
  }
}

function sentenceManipulation(sentence) {
  let words = sentence.split(' ');
  let result = [];
  for (var i = 0; i < words.length; i++) {
    result.push(stringManipulation(words[i]));
  }
  return result.join(' ');
}
