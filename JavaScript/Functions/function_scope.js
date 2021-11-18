// Global scope (convert farenhiet to celccius, valueTwo, valueThree)
    // Local Scope (F, C)
        // Local scope (isFreezing)


let FarenheitToCelcius = function(F) {
    let C = (F-32)*(5/9)

    if (C <= 0) {
        let isFreezing = true
    }

    return C
}

let valueTwo = FarenheitToCelcius(68)
let valueThree = FarenheitToCelcius(20)

console.log(valueTwo)
console.log(valueThree)




