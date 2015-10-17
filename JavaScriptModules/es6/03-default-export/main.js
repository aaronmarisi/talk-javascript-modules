System.register(['repository'], function(exports_1) {
    var repository_1;
    var repo;
    return {
        setters:[
            function (repository_1_1) {
                repository_1 = repository_1_1;
            }],
        execute: function() {
            repo = new repository_1.default('http://mydomain.com/api/');
            console.log('default export');
            console.log(repo.baseUrl);
            repo.get(1);
            repo.update(2);
            repo.remove(3);
        }
    }
});
//# sourceMappingURL=main.js.map