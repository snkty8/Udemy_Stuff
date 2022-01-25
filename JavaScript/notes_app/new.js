// Unix Epoch - Janurary 1st 1970 00:00:00

const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)


const dateOne = new Date('March 1 2018 12:00:00')
const dateTwo = new Date()

const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp > dateTwoTimeStamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimeStamp > dateOneTimeStamp) {
    console.log(dateTwo.toString())
}


const now = moment()
now.subtract(1, 'week').subtract(20, 'days')
console.log(now.format('MMMM Do YYYY'))
console.log(now.fromNow())
const nowTimeStamp = now.valueOf()
console.log(moment(nowTimeStamp).toString())

const today = moment()
today.subtract(37, 'years').add(6,'months').subtract(8, 'days')
console.log(today.format('MMM, D YYYY'))