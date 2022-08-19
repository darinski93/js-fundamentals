function piccolo(array) {

    let myMap = new Map()
    for (let el of array) {

        let spliter = el.split(', ')
        let command = spliter[0];
        let carNumber = spliter[1]

        if (command === "IN") {
            myMap.set(carNumber, 1)
        } else if (command === "OUT") {
            myMap.delete(carNumber,1)
        }
    }

    let newArr = Array.from(myMap).sort()
    let demoArr = []

    for(let el of newArr){
        demoArr.push(el[0])
    }
    console.log(demoArr.join('\n'))

    if(demoArr == 0){
        console.log(`Parking Lot is Empty`)
    }
    
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
console.log("------------------")
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)