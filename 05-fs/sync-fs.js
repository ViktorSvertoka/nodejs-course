const fs = require('fs');

// Avoid using sync versions! They block event loop!
try {
    fs.writeFileSync('./first.txt', 'First file text');
    console.log('File first.txt was written');
    fs.appendFileSync('./first.txt', '\nOne more line');
    console.log('Appended text to the first.txt file');
    fs.renameSync('./first.txt', './renamed-first.txt');
    console.log('File was renamed');
} catch (error) {
    console.log(error);
}
