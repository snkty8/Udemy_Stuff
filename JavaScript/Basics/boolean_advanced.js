let isAccountLocked = true
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Is account locked')
} else {
    console.log('Welcome')
}

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome admkn')
} else {
    console.log('Welcome')
}

let temp = 134

if (temp <=20) {
    console.log('Its too cold outside')
} else if (temp > 20 && temp <= 80) {
    console.log('You can go outide')
} else {
    console.log('It is too hot outside')
}