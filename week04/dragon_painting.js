const dragonParts = [
    [2, 3],
    [5, 4],
    [1, 3]];

function getArea(w, h) {
    return w * h;
}

let totalArea = 0;

for (let i = 0; i < dragonParts.length; i++) {
    const dragonPart = dragonParts[i];
    totalArea += getArea(dragonPart[0], dragonPart[1]);
}

console.log("Total area = " + totalArea + " m2");
console.log("Total numbers of cans = " + (2 * totalArea) + " psc");
