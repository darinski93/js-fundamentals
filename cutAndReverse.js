function cutAndReverse(input){

let spliter = input.split('')
let reversed = spliter.reverse().join('')

let firstHalf = reversed.slice(reversed.length /2)
let secondHalf = reversed.slice(0, reversed.length/2)

console.log(firstHalf)
console.log(secondHalf)

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')