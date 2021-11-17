let temp = 95

// Logical And Operator
if (temp >= 60 && temp <=90) {
    console.log('It is pretty nice out')
}

// Logical Or Operator
if (temp <= 60 || temp >= 120 ) {
    console.log('Do not outside')
}

// Logical with and/or
if (temp >=60 && temp <=90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do no go outside')
} else {
    console.log('Do whatever you want')
}

// Challenge Area

let guestOneVegan = true
let guestTwoVegan = false

// Are both vegan
// only vegan dishes

// at least 1 vegan
// some vegan options

// Niether is vegan
// anything on the menu

if (guestOneVegan && guestTwoVegan) {
    console.log('Only vegan dishes')
} else  if (guestOneVegan || guestTwoVegan) {
    console.log('Some vegan dishes')
} else {
    console.log('Anything on the menu')
}