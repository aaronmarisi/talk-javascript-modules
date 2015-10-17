var Repository = (function () {
    function Repository(url) {
        this.cache = [];
        this.baseUrl = url;
    }
    Repository.prototype.checkConnection = function () {
    };
    Repository.prototype.get = function (id) {
        console.log('get ' + id);
    };
    Repository.prototype.update = function (id) {
        console.log('update ' + id);
    };
    Repository.prototype.remove = function (id) {
        console.log('remove ' + id);
    };
    return Repository;
})();
var repo = new Repository('http://mydomain.com/api/');
console.log(repo.baseUrl);
// console.log(repo.cache); inaccessible
repo.get(1);
repo.update(2);
repo.remove(3);
//# sourceMappingURL=script.js.map