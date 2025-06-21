// How to run program: node createfile.mjs <filename> <linesQty>
import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as arguments');
    process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
if (isNaN(linesQty)) {
    console.log('Lines qty must be a number');
    process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

console.log('Start', performance.now());

for (let i = 1; i <= linesQty; i++) {
    writeStream.write(
        `This is a line number ${i} in the automatically generated file\n`
    );
}
console.log('End', performance.now());
setTimeout(() => console.log('Timeout', performance.now()), 0);

writeStream.end(() => {
    console.log(
        `Automatically generated file ${fileName} with ${linesQty} lines was created!`
    );
});
