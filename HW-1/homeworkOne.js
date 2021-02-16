/* 1 */

const tvPrice = 15.678;
const laptopPrice = 123.965;
const pcPrice = 90.2345;

/* 2 */

console.log(tvPrice);
console.log(laptopPrice);
console.log(pcPrice);

/* 3 */

const maxPrice = Math.max(tvPrice, laptopPrice, pcPrice);
const minPrice = Math.min(tvPrice, laptopPrice, pcPrice);

/* 4 */

console.log(`Max price ${maxPrice}`);
console.log(`Min price ${minPrice}`);

/* 5 */

const fullPrice = tvPrice + laptopPrice + pcPrice;
console.log(`Sum of product items ${fullPrice}`);

/* 6 */

const roundMinPrice =
  Math.floor(tvPrice) + Math.floor(laptopPrice) + Math.floor(pcPrice);
console.log(`Sum rounding price ${roundMinPrice}`);

/* 7 */

const roundTo100Price = Math.round(fullPrice / 100) * 100;
console.log(`rounding to hundreds ${roundTo100Price}`);

/* 8 */

const parityNumber = roundMinPrice % 2;
console.log(`Sum rounding down is ${parityNumber ? "odd" : "even"} number`);

/* 9 */

const clientMoney = 500;
const sumRest =
  clientMoney - tvPrice + (clientMoney - laptopPrice) + (clientMoney - pcPrice);
console.log(`The amount of the rest ${sumRest}`);

/* or */

const sumRest1 = clientMoney - fullPrice;
console.log(`The amount of the rest ${sumRest1}`);

/* 10 */

const averagePrice = fullPrice / 3;
console.log(`Average Price ${parseFloat(averagePrice.toFixed(2))}`);

/* 11 */

let discount = Math.random() * fullPrice;
let personalDiscount = fullPrice - discount;
console.log(`Client discount is ${parseFloat(personalDiscount.toFixed(2))}`);
let netProfit = fullPrice / 2 - parseFloat(personalDiscount.toFixed(2));
console.log(`Our net profit is ${netProfit}`);

/* advanced */

console.log(`Max price ${maxPrice};
Min price ${minPrice};
Sum of product items ${fullPrice};
Sum rounding price ${roundMinPrice};
Rounding to hundreds ${roundTo100Price};
Sum rounding down is ${parityNumber ? "odd" : "even"} number
The amount of the rest ${sumRest}
The amount of the rest ${sumRest1};
Average Price ${parseFloat(averagePrice.toFixed(2))};
Client discount is ${parseFloat(personalDiscount.toFixed(2))};
Our net profit is ${netProfit}`);
