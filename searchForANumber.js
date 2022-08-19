function searchForANumber(firstArr, secondArr){

    let elToTake = firstArr.slice(0, secondArr[0]);
    let deletingEl = secondArr[1];
    let specialNum = secondArr[2];

for(let j = 0; j < deletingEl; j++){
    elToTake.shift()
}
    let count = 0;
    elToTake.forEach(element =>{
        if(element === specialNum){
            count +=1
        }
    })

    
    console.log(`Number ${specialNum} occurs ${count} times.`)
}


searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3])

    