// Object Literal --------------------------
var foo = {
    bar: 'foo bar'
};

// ReferenceError
// console.log(bar);

// defined
console.log(foo.bar);

// objects have a prototype
console.log(Object.getPrototypeOf(foo));

// objects have constructor
console.log(foo.constructor);



// Array -------------------------------
var myArray = ['one', 'two'];

console.log(myArray[0]);
console.log(Object.getPrototypeOf(myArray));
console.log(myArray.constructor);



// Object --------------------------------
var newObject = new Object();
newObject.bar = 'myObject bar';

console.log(newObject.bar);
console.log(Object.getPrototypeOf(newObject));
console.log(newObject.constructor);