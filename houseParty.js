function houseParty(arrOfStr) {

    let theList = [];


    for (let el of arrOfStr) {

        let command = el.split(' ')
        let name = command[0]


        if (command.length === 3) {
            if (theList.includes(name)) {
                console.log(`${name} is already in the list!`)

            } else {
                theList.push(name)
            }
        } else {
            if (!theList.includes(name)) {

                console.log(`${name} is not in the list!`)

            } else {
                let index = theList.indexOf(name);
                theList.splice(index, 1)


            }

        }
    }
    console.log(theList.join('\n'))

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
