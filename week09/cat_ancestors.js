function getNumOfAncestors(generation){
    return generation === 1 ? 2 : 2 * getNumOfAncestors(generation - 1);
}

const numberOfGenerations = Math.floor(100 / 3);
console.log(getNumOfAncestors(numberOfGenerations));