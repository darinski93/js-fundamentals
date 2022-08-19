function schoolGrades(array) {


    let myMap = new Map()

    for (let line of array) {

        let spliter = line.split(' ');
        let name = spliter.shift();
        let strOfGrades = spliter

        if (!myMap.has(name)) {

            myMap.set(name, strOfGrades)

        } else {

            let oldStr = myMap.get(name)
            for(let grade of strOfGrades){
                oldStr.push(grade)
            }
            myMap.set(name,oldStr)
        }

    }

   
    let sortedBy = Array.from(myMap.entries()).sort(([keyA, valueA], [keyB, valueB]) =>{
        return keyA.localeCompare(keyB)
    })

    for (let [key, value] of sortedBy) {
        let sumGrade = 0
        
        for(grade of value){
            sumGrade += Number(grade)
        }
        let avgGrade = sumGrade / value.length
        console.log(`${key}: ${avgGrade.toFixed(2)}`)
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)