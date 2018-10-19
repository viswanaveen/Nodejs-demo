function Employee(id, fName, lName, city) {
    this.id = id;
    this.firstName = fName;
    this.lastName = lName;
    this.city = city;
}

const shivan = new Employee(1, 'Shivan', 'LP', 'Trivandrum')
const siddharth = new Employee(1, 'Siddharth', 'S', 'Shimoga')
const test = new Employee(1, 'test', 'test', 'Bangalore')

console.log(shivan.firstName + ' ' + shivan.lastName)
console.log(siddharth.firstName + ' ' + siddharth.lastName)
console.log(test.firstName + ' ' + test.lastName)

const fxCashProduct = {
    type: 'spot',
    currentPrice: 145,
    closingPrice: 150,
    exchange: 'JPN',
    clientsDealt: ['JP Morgan', 'Goldman Sachs', 'Societi General']
}

console.log(fxCashProduct);

console.log("The product details")
console.log(fxCashProduct.type);
console.log(fxCashProduct.currentPrice);
console.log(fxCashProduct.closingPrice);
console.log(fxCashProduct.exchange);