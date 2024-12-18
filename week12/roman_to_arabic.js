const letters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function convert(romanNum){
    let result = 0;

    for (let i = 0; i < romanNum.length; i++) {
        const letter = romanNum[i];
        const value1 = letters[letter];

        const nextLetter = romanNum[i + 1];
        const value2 = letters[nextLetter];

        if (i === romanNum.length - 1){
            result += value1;
        } else {
            if (value1 < value2){
                // case of IV
                result -= value1;
            } else {
                // case of VI
                result += value1;
            }
        }
    }

    return result;
}

// VI = 6
console.log(convert("VI"));
// XXI = 21
console.log(convert("XXI"));
// XLVI = 46
console.log(convert("XLVI"));
// MDLXXVI = 1576
console.log(convert("MDLXXVI"));