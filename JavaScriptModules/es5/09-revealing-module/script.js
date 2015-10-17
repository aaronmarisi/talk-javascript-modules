// Revealing Module pattern
// -- singleton example

var repo = function (url) {

    // variables
    var cache = [];
    var baseUrl = url;

    // functions
    var checkConnection = function () {

    }

    var get = function (id) {
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
        baseUrl: baseUrl,
        get: get,
        update: update,
        remove: remove
    }
}('http://mydomain.com/api/');


console.log(repo.baseUrl);
repo.get(1);
repo.update(2);
repo.remove(3);