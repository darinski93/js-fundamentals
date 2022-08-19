function oddAndEvenSum(number) {

    let numToStr = String(number);
    let str = []


    for (let i = 0; i <= numToStr.length - 1; i++) {

        str.push(numToStr[i])

    }
    let sumOdd = 0
    let sumEven = 0
    for (let el of str) {

        if (el % 2 === 0) {
            sumEven += Number(el)
        }
        else {
            sumOdd += Number(el)
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)

}
oddAndEvenSum(1000435)