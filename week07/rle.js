// Run-length encoding
// https://en.wikipedia.org/wiki/Run-length_encoding

function encodeRle(strToEncode) {
    if (strToEncode.length < 2) return strToEncode;

    let currentCount = 1;
    let output = "";

    for (let i = 1; i < strToEncode.length; i++) {
        const currentLetter = strToEncode[i];
        const prevLetter = strToEncode[i - 1];
        if (currentLetter === prevLetter){
            currentCount++;
        } else {
            output += currentCount.toString() + prevLetter;
            currentCount = 1;
        }

        if (i ===  strToEncode.length - 1) output += currentCount.toString() + currentLetter;
    }

    return output;
}

console.log(encodeRle(""));
console.log("a=" + encodeRle("a"));
console.log("aa=" + encodeRle("aa"));
console.log("aaa=" + encodeRle("aaa"));

console.log("aaabb=" + encodeRle("aaabb"));
console.log("aaabbc=" + encodeRle("aaabbc"));