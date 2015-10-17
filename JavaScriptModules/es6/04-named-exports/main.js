System.register(['repository'], function(exports_1) {
    var repository_1;
    return {
        setters:[
            function (repository_1_1) {
                repository_1 = repository_1_1;
            }],
        execute: function() {
            console.log('named exports');
            console.log(repository_1.fishRepo.baseUrl);
            console.log(repository_1.config.utcOffset);
            repository_1.fishRepo.get('tuna');
        }
    }
});
//# sourceMappingURL=main.js.map