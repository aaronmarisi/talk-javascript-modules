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
            fishes = new FishRepository('http://mydomain.com/api/fish/');
            config = { utcOffset: '-5' };
            exports_1("fishRepo", fishes);
            exports_1("config", config);
        }
    }
});
//# sourceMappingURL=repository.js.map