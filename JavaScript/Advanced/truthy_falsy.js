const products = [{name: 'mouse'}]
const product = products[0]

// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolen context
// Falsy Values - false, 0, '', null, undefined, NaN

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}