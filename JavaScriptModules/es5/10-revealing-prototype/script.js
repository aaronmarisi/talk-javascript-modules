// Revealing Prototype pattern
// -- prototype extensibility
// -- loaded in memory once
// -- 'this' can be tricky, function.call(this, arg)

// Constructor
var Repository = function (url) {
    this.baseUrl = url;
    this._cache = [];
};

// Members
Repository.prototype = (function () {

    // functions
    var checkConnection = function () {
        console.log('connect: ' + this.baseUrl);
    }

    var get = function (id) {
        checkConnection();
        console.log('get ' + id);
    }

    var update = function (id) {
        console.log('update ' + id);
    }

    var remove = function (id) {
        console.log('remove ' + id);
    }

    // public members
    return {        
        get: get,
        update: update,
        remove: remove
    };
}());

var repo = new Repository('http://mydomain.com/api/');

console.log(repo.baseUrl);
repo.get(1);
repo.update(2);
repo.remove(3);