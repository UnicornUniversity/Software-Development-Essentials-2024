function validate(s){
    const matches = {"(" : ")", "[" : "]"};
    const oppositeMatches = {")" : "(", "]" : "["};

    const stack = [];

    for (const letter of s) {
        if (letter in matches){
            stack.push(letter);
        } else if (letter in oppositeMatches){
            if (stack.length > 0){
                const lastItem = stack.pop();
                if (oppositeMatches[letter] !== lastItem){
                    return false;
                }
            }
        }
    }

    return true;
}

console.log(validate("var x=(1, [2])"));
console.log(validate("var x=(1, [2)]"));
