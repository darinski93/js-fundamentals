function convertToJSON(name, lastName, hairColor){


    let person = {};
    person.name = name,
    person.lastName = lastName,
    person.hairColor = hairColor


  let converted = JSON.stringify(person)
  console.log(converted)



}

convertToJSON('George', 'Jones', 'Brown')