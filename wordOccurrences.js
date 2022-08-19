function wordOccurrences(data) {


    let myMap = new Map()
   
    for(let word of data){

        if(myMap.has(word)){

            let oldSize = myMap.get(word) + 1
            myMap.set(word, oldSize)
        }
    else{
        myMap.set(word,1)
    }


    }
    
   let newArr = Array.from(myMap.entries()).sort((a,b) =>
    b[1] - a[1]
   )
            
       for(let el of newArr){
        console.log(`${el[0]} -> ${el[1]} times`)
       }
   

}
wordOccurrences(["Here", "is", "the", "first", "sentence", 
"Here", "is", "another", "sentence", "And",
 "finally", "the", "third", "sentence"])