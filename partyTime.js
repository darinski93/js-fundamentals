function partyTime(array) {


    let vip = [];
    let normal = [];


    let isParty = false;

    for (let names of array) {

        if (names === "PARTY") {
            isParty = true;
            continue;
        }

        if (!isParty) {

            let firstChar = names[0];

            if (isNaN(firstChar)) {
                normal.push(names)

            } else {
                vip.push(names)
            }
        }
        else {

            let firstChar = names[0];
            if (isNaN(firstChar)) {
                let index = normal.indexOf(names);
                normal.splice(index, 1)
            } else {
                let index = vip.indexOf(names);
                vip.splice(index, 1)
            }
        }
    }

    let size = vip.length + normal.length;
    console.log(size)

    for (let code of vip) {
        console.log(code)
    }
    for (let code of normal) {
        console.log(code)
    }


}
partyTime(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ])