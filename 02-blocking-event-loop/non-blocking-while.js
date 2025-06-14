const fs = require('fs');
let isRunning = true;

setTimeout(() => (isRunning = false), 100);
process.nextTick(() => console.log('Next tick'));

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
        // // with resolve() we stay on the same event loop iteration
        // resolve()
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));
