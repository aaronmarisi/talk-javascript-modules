// Prototype pattern

// Constructor
var Repository = function (url) {
    this.baseUrl = url;
}

// Members
Repository.prototype = {
    get: function (id) {
        console.log('get ' + id);
    },
    update: function (id) {
        console.log('update ' + id);
    },
    remove: function (id) {
        console.log('remove ' + id);
    }
}

var repo = new Repository('http://mydomain.com/api/');

console.log(repo.baseUrl);
repo.get(1);
repo.update(2);
repo.remove(3);