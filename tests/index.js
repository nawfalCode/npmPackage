nawfal = require('../uuidGenerator/uuid');
v1 = nawfal.getUuidV1;

var ar = new Array(8);

for (var i = 0; i < ar.length; i++) {
    ar[i] = getRandomArbitrary(0, 255);
}

console.log('V1:' + v1(ar));

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}