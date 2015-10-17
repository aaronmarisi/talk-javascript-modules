System.register([], function(exports_1) {
    var FishRepository, fishes, config;
    return {
        setters:[],
        execute: function() {
            FishRepository = (function () {
                function FishRepository(url) {
                    this.cache = [];
                    this.baseUrl = url;
                }
                FishRepository.prototype.checkConnection = function () {
                };
                FishRepository.prototype.get = function (id) {
                    console.log('get ' + id);
                };
                FishRepository.prototype.update = function (id) {
                    console.log('update ' + id);
                };
                FishRepository.prototype.remove = function (id) {
                    console.log('remove ' + id);
                };
                return FishRepository;
            })();
            exports_1("FishRepository", FishRepository);
            exports_1("fishes", fishes = new FishRepository('http://mydomain.com/api/fish/'));
            exports_1("config", config = { utcOffset: '-5' });
        }
    }
});
//# sourceMappingURL=repository.js.map