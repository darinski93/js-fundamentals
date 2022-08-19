function countStringOccurrences(sentance, word) {

    let spliter = sentance.split(' ')
    let counter = 0

    for (let el of spliter) {

        if (el === word) {
            counter += 1
        }
    }

    console.log(counter)

}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
)