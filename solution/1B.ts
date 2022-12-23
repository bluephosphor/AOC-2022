import { getInput } from "..";

const day = 1;
const input = getInput(day).split(/\r?\n/);


interface Elf {
    total: number;
}

// create a list of elbes
const Elves: Elf[] = [];

// function to make a new elf
const createElf = () => {
    const newElf: Elf = {
        total: 0
    }
    Elves.push(newElf);
    return newElf;
}

// create en else to start with
let currentElf = createElf();

for (const entry of input) {
    if (entry !== '') {
        // count calories!
        currentElf.total += parseInt(entry);
    } else {
        // new elf time
        currentElf = createElf();
    }
}

Elves.sort((a,b) => b.total - a.total);

console.log(Elves[0].total + Elves[1].total + Elves[2].total);