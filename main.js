let dices = [];

function RNG(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
function lastItemOfArray(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}
let count = 0;
while (count < 5) {
	dices.push(RNG(1, 6));
    console.log(lastItemOfArray(dices));
	count++;
}
