import { getInput } from "..";

const day = 2;
const input = getInput(day).split(/\r?\n/);

interface Play {
    player: number;
    name:   string;
    value:  number;
}

const gameData = new Map<String, Play>();

gameData.set('A', {
    player: 1,
    name: "Rock",
    value: 1
});
gameData.set('B', {
    player: 1,
    name: "Paper",
    value: 2
});
gameData.set('C', {
    player: 1,
    name: "Scissers",
    value: 3
});
gameData.set('X', {
    player: 2,
    name: "Rock",
    value: 1
});
gameData.set('Y', {
    player: 2,
    name: "Paper",
    value: 2
});
gameData.set('Z', {
    player: 2,
    name: "Scissers",
    value: 3
});

const doGameStep = (entry: string) => {
    const steps = entry.split(' ');
    const ourPlay = gameData.get(steps[0]);
    const opponentPlay = gameData.get(steps[1]);
    if (ourPlay && opponentPlay) {
        console.log(`we played ${ourPlay.name} and our opponent played ${opponentPlay.name}!`);
    }
}

for (const entry of input) {
    doGameStep(entry);
}