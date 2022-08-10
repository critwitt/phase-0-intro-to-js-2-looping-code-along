// Code your solutions in this file
function writeCards (names) {
    let thanks = [];
    for (let i = 0; i < names.length; i++) {
        thanks[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return thanks
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}