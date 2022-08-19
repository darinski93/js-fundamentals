function addAndSubstract(numOne, numTwo, numThree) {


    let sumOfFirstAndSecond = sum(numOne, numTwo);

    let subsResult = substract(sumOfFirstAndSecond, numThree);
    
    console.log(subsResult)

    
    function sum(numOne, numTwo) {
        return numOne + numTwo
    }

    function substract(firstResult, thirdNum) {
        return sumOfFirstAndSecond - numThree
    }


    
}

addAndSubstract(23, 6, 10)