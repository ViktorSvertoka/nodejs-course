const myName = 'Bogdan';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 77;

console.log('Text from the multiple-exports CommonJS module');

// module.exports and export reference the same object in memory
module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
