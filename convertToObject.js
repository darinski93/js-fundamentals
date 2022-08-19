function convertToObject(objectArr){


let myObj = JSON.parse(objectArr)

let data = Object.entries(myObj)

for(let [key, value] of data){
    console.log(`${key}: ${value}`)
}
    
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')