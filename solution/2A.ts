import { getInput } from "..";

const day = 2;
const input = getInput(day).split(/\r?\n/);

//const input = ["A Y", "B X", "C Z"];

interface Play {
  player: number;
  name: string;
  value: number;
}

const gameData = new Map<String, Play>();

gameData.set("A", {
  player: 1,
  name: "Rock",
  value: 1,
});
gameData.set("B", {
  player: 1,
  name: "Paper",
  value: 2,
});
gameData.set("C", {
  player: 1,
  name: "Scissors",
  value: 3,
});
gameData.set("X", {
  player: 2,
  name: "Rock",
  value: 1,
});
gameData.set("Y", {
  player: 2,
  name: "Paper",
  value: 2,
});
gameData.set("Z", {
  player: 2,
  name: "Scissors",
  value: 3,
});

const Rules = new Map<String, String>();

Rules.set("Scissors", "Paper");
Rules.set("Paper", "Rock");
Rules.set("Rock", "Scissors");

const playRPC = (ourPlay: Play, opponentPlay: Play) => {
  if (Rules.get(ourPlay.name) === opponentPlay.name) {
    console.log("We won this round!");
    return 6;
  } else if (Rules.get(opponentPlay.name) === ourPlay.name) {
    console.log("We lost this round!");
    return 0;
  } else {
    console.log("This round was a draw!");
    return 3;
  }
};

const doGameStep = (entry: string) => {
  console.log("------------------------------------------");

  let roundScore = 0;

  const steps = entry.split(" ");
  const opponentPlay = gameData.get(steps[0]);
  const ourPlay = gameData.get(steps[1]);

  if (ourPlay && opponentPlay) {
    console.log(
      `We played ${ourPlay.name} and our opponent played ${opponentPlay.name}!`
    );
    roundScore += ourPlay.value;
    roundScore += playRPC(ourPlay, opponentPlay);
    console.log("Our score this round was: " + roundScore);
  }

  return roundScore;
};

let total = 0;

for (const entry of input) {
  total += doGameStep(entry);
}

console.log("Total Score: " + total);
