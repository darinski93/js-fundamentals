function matchPhoneNumber(input){



let pattern = /[+]359([ -])2([ -])\d{3}\1\d{4}\b/g

let validNumber;
let validNumbers = []

while((validNumber = pattern.exec(input)) !== null){

    validNumbers.push(validNumber[0])
}


console.log(validNumbers.join(', '))

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])