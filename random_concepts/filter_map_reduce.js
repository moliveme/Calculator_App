// .filter() 
// ...is applied on an array. it returns an array after pocessing each value
// for example, if we want to filter an array for positive values

const numbers = [1, -2, 3, 12, -233, 43];

const filtered = numbers.filter(function(value) {
    return value >= 0;
});

console.log(filtered);

// using arrow functions: 

const filtered2 = numbers.filter(value => value >= 0); // ie., include value if (=>) value >= 0

console.log(filtered2);

// .map()
// callback function takes in each element of the array and replaces it with another element
// returns a new array

// value is replaced with (value % 2 === 0), which is a boolean
const even_or_odd = numbers.map(value => value % 2 === 0); 

console.log(even_or_odd);

// value is replaced with its square
const squares = numbers.map(value => value * value);

console.log(squares);

// .reduce()
// callback fucntion takes in 2 arguments: the first and second elements of the array
// callback function returns an array of length n - 1, where n is length of old array
// cos the first and second elements were combined in some manner to produce a single element,
// which becomes the first argument of the next call to the callback function.
// the final return value of the .reduce() call is a single value

// sum of array
const sum = numbers.reduce((a, b) => a + b);

console.log(sum);

// concat of array
const encrypted_message = ['this', 'is', 'top', 'secret'];

const decrypted_message = encrypted_message.reduce((a, b) => a + " " + b);

console.log(decrypted_message);