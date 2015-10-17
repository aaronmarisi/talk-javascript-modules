// IIFE - Immediately Invoked Function Expression
var seed = 1;

var counter = function () {
    return [seed, ++seed, ++seed];
}();

console.log(counter); // [1,2,3]

// As opposed to
counter = function () {
    return [seed, ++seed, ++seed];
}

console.log(counter); // function () {...}

seed = 1;
console.log(counter()); // [1,2,3]


// Pass Parameter
var otherCounter = (function (start) {
    return [start, ++start, ++start];
})(seed);

console.log(otherCounter); // [3,4,5]


// In other words
function plainFunction() {};
var result = (plainFunction());

function paramFunction(param) {};
result = (paramFunction(param))(outerParam);