System.register([], function(exports_1) {
    var Repository;
    return {
        setters:[],
        execute: function() {
            Repository = (function () {
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
            exports_1("default", Repository);
        }
    }
});
//# sourceMappingURL=repository.js.map