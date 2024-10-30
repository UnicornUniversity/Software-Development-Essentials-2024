function sayWord(word) {
    let wordToProcess = word;
    while (wordToProcess.length > 0) {
        console.log(wordToProcess);
        wordToProcess = wordToProcess.substring(1);
    }
}

sayWord("abracadabra");