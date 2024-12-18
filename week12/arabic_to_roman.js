const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "I"];

function convert(arabicNum){
    let romanResult = "";
    let currentValue = arabicNum;
    while(currentValue > 0){
        for (let i = 0; i < arabic.length; i++) {
            const an = arabic[i];
            if (currentValue >= an){
                currentValue -= an;
                romanResult += roman[i];
                break;
            }
        }
    }

    return romanResult;
}

// VI
console.log(convert(6));
// XXI
console.log(convert(21));
// XLVI
console.log(convert(46));
// MDLXXVI
console.log(convert(1576));



