import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
    console.warn(`Source dir ${sourceDir} doesn't exist!`);
    console.log('Exiting...');
    process.exit(0);
}

if (fs.existsSync(destinationDir)) {
    fs.rmSync(destinationDir, { recursive: true });
}
fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Start', performance.now());
    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName);
        const destinationFilePath = path.join(
            destinationDir,
            `${index + 1}. ${fileName}`
        );

        const readFileStream = fs.createReadStream(sourceFilePath);
        const writeFileStream = fs.createWriteStream(destinationFilePath);

        readFileStream.pipe(writeFileStream);

        writeFileStream.on('finish', () => {
            console.log(`File ${fileName} was copied`);
        });
    });
    console.log('End', performance.now());
});
