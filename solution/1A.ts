import { getInput } from "..";

const day = 1;
const input = getInput(day).split(/\r?\n/);

let largestTotal = 0;
let currentTotal = 0;

for (const entry of input) {
    if (entry !== '') {
        // count calories!
        currentTotal += parseInt(entry);
    } else {
        // new elf time
        if (currentTotal > largestTotal) largestTotal = currentTotal;
        currentTotal = 0;
    }
}

console.log(largestTotal);