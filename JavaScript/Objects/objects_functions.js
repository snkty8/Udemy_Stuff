let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: console.log(`${book.title} by ${book.author}`),
        pageCountSummary : `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area
// create function take F in and return object with F, C, K

let temp = {
    F: 100,
    C: 0,
    K: 0
}

let tempConvert = function(F) {
    temp.C = (temp.F-32)*(5/9)
    temp.K = temp.C + 273.15
    return {
        summary: console.log(`When Farenheit temp is ${temp.F}, Celcius temp is ${temp.C}, and Kelvin temp is ${temp.K}.`)
    }
}

let value = tempConvert(temp)
console.log(value.summary)
