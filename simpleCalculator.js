function simpleCalculator(numOne, numTwo, operator){

    let res = 0

    switch (operator) {
        case "multiply": res = numOne * numTwo; break;
        case "divide": res = numOne / numTwo; break;
        case "add": res = numOne + numTwo; break;
        case "subtract": res = numOne - numTwo; break;
    }
return res

}

let finalSum = simpleCalculator(5, 5,'multiply')
console.log(finalSum)