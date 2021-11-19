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

let tempConvert = function (F) {
    return {
        F: F,
        K: (F + 459.67) * (5/9),
        C: (F - 32) * (5/9)
    }
}

let temps = tempConvert(74)
console.log(temps)

