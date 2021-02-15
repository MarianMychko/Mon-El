/* 1 */

const productItemOne = 15.678;
const productItemTwo = 123.965;
const productItemThree = 90.2345;

/* 2 */

console.log (productItemOne);
console.log (productItemTwo);
console.log (productItemThree);

/* 3 */

const maxPrice = Math.max(productItemOne, productItemTwo , productItemThree);
const minPrice = Math.min(productItemOne, productItemTwo , productItemThree);

/* 4 */

console.log (`Max price ${maxPrice}`);
console.log (`Min price ${minPrice}`);

/* 5 */

const fullPrice = (productItemOne + productItemTwo + productItemThree);
console.log(`Sum of product items ${fullPrice}`);

/* 6 */

const roundMinPrice = Math.floor(productItemOne) + Math.floor(productItemTwo) + Math.floor(productItemThree);
console.log(`Sum rounding price ${roundMinPrice}`);

/* 7 */

const roundTo100Price = Math.round(fullPrice/100)*100;
console.log(`rounding to hundreds ${roundTo100Price}`);

/* 8 */

if (Math.floor(fullPrice) % 2 == 0) {
console.log('Sum rounding down is a even number.') 
} else {
console.log('Sum rounding down is an odd number.')
};

/* 9 */

const sumRest = (500 - productItemOne) + (500 - productItemTwo) + (500 - productItemThree);
console.log(`The amount of the rest ${sumRest}`);

/* 10 */

const averagePrice = fullPrice / 3;
console.log(`Average Price ${averagePrice.toFixed(2)}`);

/* 11 */

let discount = Math.random() * fullPrice;
let personalDiscount = fullPrice - discount ;
console.log(`Client discount is ${personalDiscount.toFixed(2)}`);
let netProfit = (fullPrice/2) - personalDiscount.toFixed(2);
console.log(`Our net profit is ${netProfit}`);

/* advanced */