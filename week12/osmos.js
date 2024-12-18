class Molecule {
    constructor(name, x, y, value) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.value = value;
        this.consumed = false;
    }
}

function getNumberNotConsumed(allMolecules) {
    let cnt = 0;
    for (const mol of allMolecules) {
        if (!mol.consumed) cnt++;
    }

    return cnt;
}

function consumeOthers(myMol, allMols) {
    let round = 0;
    let myMolecule = myMol;
    let allMolecules = allMols;
    let canContinue = true;

    while (canContinue && getNumberNotConsumed(allMolecules) > 0) {
        round++;
        console.log("---------------");
        console.log("Round: " + round);
        console.log("---------------");

        let bestMolecule = null;
        let maxProfit = 0;

        for (let index = 0; index < allMolecules.length; index++) {
            const currentMol = allMolecules[index];
            if (currentMol.consumed) continue;

            const distance = Math.abs(currentMol.x - myMolecule.x) + Math.abs(currentMol.y - myMolecule.y);
            const canConsume = myMolecule.value > currentMol.value + distance;
            const profit = currentMol.value - distance;

            console.log("for " + currentMol.name + " distance= " + distance + " can consume?= " + canConsume + " profit= " + profit);

            if (canConsume && (getNumberNotConsumed(allMolecules) === 1 || profit > maxProfit)) {
                bestMolecule = currentMol;
                maxProfit = profit;

                console.log("best molecule is " + currentMol.name + " max profit= " + maxProfit);
            }
        }

        if (bestMolecule == null) {
            console.log("can't find molecule to consume");
            canContinue = false;
        } else {
            console.log("go eat " + bestMolecule.name);

            myMolecule.x = bestMolecule.x;
            myMolecule.y = bestMolecule.y;
            myMolecule.value = myMolecule.value + maxProfit;
            bestMolecule.consumed = true;

            console.log("left:");
            if (getNumberNotConsumed(allMolecules) > 0) {
                for (const mol of allMolecules) {
                    if (!mol.consumed) console.log(mol.name);
                }
            } else {
                console.log("none");
            }
        }
    }
}

const myMolecule = new Molecule("blue", 1, 1, 7);

const allMolecules = [
    new Molecule("green", 3, 1, 3),
    new Molecule("yellow", 2, 2, 4),
    new Molecule("red", 2, 5, 8),
    new Molecule("orange", 3, 4, 5)
];

consumeOthers(myMolecule, allMolecules);