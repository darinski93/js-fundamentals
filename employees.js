function employees(arr) {


   let person  = {}
        
    for(let el of arr){

    person.name = el
    person.pass = el.length
    console.log(`Name: ${person.name} -- Personal Number: ${person.pass}`)
    
    }
  
    
    }
    

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)