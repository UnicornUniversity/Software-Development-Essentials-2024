function sayWord(word) {
    console.log(word);
    if (word.length > 0) sayWord(word.substring(1));
}

sayWord("abracadabra");