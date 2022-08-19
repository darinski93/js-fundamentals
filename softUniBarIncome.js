function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*[|](?<count>\d+)[|][^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g

    let valid;
    let nameArr = []
    let sum = 0
    let totalPrice = 0

    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'end of shift') {
            break;
        }
        while ((valid = pattern.exec(input[i])) !== null) {

            let names = valid.groups['name']
            let products = valid.groups['product']
            let counter = Number(valid.groups['count'])
            let prize = Number(valid.groups['price'])

            sum = counter * prize
            totalPrice += sum
            console.log(`${names}: ${products} - ${sum.toFixed(2)}`)

        }
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`)


}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)