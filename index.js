const numbers = [1, 2, 3, 4, 5, 8];
// console.log(numbers.filter(n => n > 4));

// console.log(numbers.reduce((acum, current) => acum + current, 10));

// console.log(numbers.find(n => n === 3));

/* const [a, b, ...c] = numbers;
console.log(a, b, c); */

/* let [a, b, , , ,c] = numbers;
console.log(a, b, c); */

/* [b, a] = [a, b];
console.log(a, b); */

const otherNumbers = [10, 20, ...numbers, 30];
console.log(otherNumbers);
