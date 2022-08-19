function extractFile(input){


let spliter = input.split('\\')
let searchingWords = spliter.pop()
let wordSpliter = searchingWords.split('.')
let format = wordSpliter.pop()
let fileName = wordSpliter.join('.')

console.log(`File name: ${fileName}`)
console.log(`File extension: ${format}`)
    

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')