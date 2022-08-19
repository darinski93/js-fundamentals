function censoredWords(sentance, word) {

    let splitedWord = sentance.split(word)
    let words = splitedWord.join("*".repeat(word.length))
    console.log(words)

}

censoredWords('A small sentence with some words', 'small')