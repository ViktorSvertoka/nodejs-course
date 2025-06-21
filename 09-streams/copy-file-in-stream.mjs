import fs from 'fs';

const fileName = './files/fifth.txt';
const copiedFileName = './files/fifth-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

readStream.on('end', () => console.log('Read stream ended'));
writeStream.on('finish', () => console.log('File was copied'));
writeStream.on('close', () => console.log('Write stream closed'));
