//basic
function getToday(days){
    return days[days.length - 1];
}

function incBird(birds){
    let newArr = birds.slice(0, birds.length - 1);
    let lastItem = birds[birds.length - 1] + 1;
    newArr.push(lastItem);

    return newArr;
}

function daysWithoutBirds(days){
    for (let i = 0; i < days.length; i++) {
        if (days[i] === 0) return true;
    }
    return false;
}

//numOfBirdsForBusyDay stands for a threshold for busy days
function getNumberBusyDays(days, numOfBirdsForBusyDay){
    let num = 0;
    for (let i = 0; i < days.length; i++) {
        if (days[i] >= numOfBirdsForBusyDay) num++;
    }
    return num;
}

//advanced

function getNDaysCount(days, numberOfDays){
    let numberOfBirds = 0;
    for (let i = 0; i < days.length; i++) {
        if (i < numberOfDays){
            numberOfBirds += days[i];
        }
    }
    return numberOfBirds;
}

function getAverageCount(days){
    let currentSum = 0;
    let currentCount = 0;
    for (let i = 0; i < days.length; i++) {
        const birds = days[i];
        if (birds > 0){
            currentCount++;
            currentSum += birds;
        }
    }

    return currentSum / currentCount;
}

const days = [0, 2, 5, 3, 7, 8, 4];

//console.log("original days is " + days);
console.log("today's observation is " + getToday(days));
console.log("incBird is " + incBird(days));
//console.log("after bug days is " + days);
console.log("daysWithoutBirds is " + daysWithoutBirds(days));
console.log("getNumberBusyDays is " + getNumberBusyDays(days, 1));

console.log("getNDaysCount is " + getNDaysCount(days, 4));
console.log("getAverageCount is " + getAverageCount(days));