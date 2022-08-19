function negativeOrPositiveNumbers(array) {

   
    let newArr = []

    for(let el of array){

        el = Number(el)
        if(el < 0 ){
            newArr.unshift(el)
        }else{
            newArr.push(el)
        }
    }
    console.log(newArr.join('\n'))
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])