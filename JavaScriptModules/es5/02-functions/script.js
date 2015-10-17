// Function definition -----------
function foo() {   
    return 'result';
}

// functions are objects too
console.log(foo);

// objects have a prototype
console.log(Object.getPrototypeOf(foo));

// objects have constructor
console.log(foo.constructor);


// Function invocation ---------------
var result = foo();
console.log(result);

// ReferenceError
//console.log(result.bar);

console.log(Object.getPrototypeOf(result));
console.log(result.constructor);


// Constructor with new keyword --------------
function Foo() {
    this.bar = 'foobar';
}

// With return object (doesn't work with primitives)
function OtherFoo() {
    return {
        baz : 'foobaz'
    };
}

var newFoo = new Foo();
console.log(newFoo);
console.log(newFoo.bar);

var otherFoo = new OtherFoo();
console.log(otherFoo);
console.log(otherFoo.baz);

// invocation for constructor is undefined
var invoke = Foo();
console.log(invoke); // undefined

// new with invocation is undefined
var newfoo = new foo();
console.log(newfoo); // empty object

console.log(Object.getPrototypeOf(newFoo));
console.log(newFoo.constructor);