const path = require('path');

const filePath = '/Users/bogdan/Desktop/node/index.js';
const textFilePath = '/Users/bogdan/Desktop/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // /Users/bogdan/Desktop/node
console.log(path.dirname(directoryPath)); // ./node

console.log(path.resolve(relativePath)); // /Users/bogdan/Desktop/node/07-path/node/movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(relativePath)); // .mov
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
// /Users/bogdan/Desktop/node/renamed-index.mjs
