//const inputStr = "UPDNDNUPUPUPUP";
// wrong
const inputStr = "UPUUPDNDX";

let currentFloor = 0;
const minFloor = 0;
const maxFloor = 3;

let currentIndex = 0;
let command = "";
const validCommands = ["UP", "DN"];

while (true) {
    if (currentIndex < inputStr.length) {
        const letter = inputStr.substring(currentIndex, currentIndex + 1);
        command += letter;

        if (command.length === 2) {
            if (validCommands.includes(command)) {
                if (command === "UP") {
                    if (currentFloor + 1 > maxFloor) {
                        console.log("Can't move up");
                    } else {
                        currentFloor++;
                    }
                } else if (command === "DN") {
                    if (currentFloor - 1 < minFloor) {
                        console.log("Can't move down");
                    } else {
                        currentFloor--;
                    }
                }
                command = "";
                console.log("The elevator at " + currentFloor);
            } else {
                command = command.substring(1);
            }
        }
        currentIndex++;
    } else {
        break;
    }
}
console.log("Elevator program is " + inputStr);
console.log("Trip is over. The elevator at " + currentFloor);

