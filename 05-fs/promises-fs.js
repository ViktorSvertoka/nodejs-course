const fs = require('fs/promises');

fs.writeFile('./first.txt', 'First file text')
    .then(() => console.log('File first.txt was written'))
    .then(() => fs.appendFile('./first.txt', '\nOne more line'))
    .then(() => console.log('Appended text to the first.txt file'))
    .then(() => fs.rename('./first.txt', './renamed-first.txt'))
    .then(() => console.log('File was renamed'))
    .catch((err) => console.log(err));
