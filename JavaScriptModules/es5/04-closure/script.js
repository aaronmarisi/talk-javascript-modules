var bar = 'bar';

function createClosure() {
    var foo = 'foo';

    return function createSecondClosure() {
        console.log(foo + bar);
    }
}

bar = 'bar1';
var closure2 = createClosure();
closure2();