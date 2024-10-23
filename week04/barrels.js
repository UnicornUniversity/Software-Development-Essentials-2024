let b1 = 60;
let b2 = 40;

const eqPoint = (b1 + b2) / 2;

if (b1 < eqPoint){
    b1 += (eqPoint - b1);
    // the same
    // b1 = b1 + (eqPoint - b1);
}

if (b2 < eqPoint){
    b2 += (eqPoint - b2);
}

if (b1 > eqPoint){
    b1 -= (b1 - eqPoint);
}

if (b2 > eqPoint){
    b2 -= (b2 - eqPoint);
}

console.log("b1 = " + b1);
console.log("b2 = " + b2);


