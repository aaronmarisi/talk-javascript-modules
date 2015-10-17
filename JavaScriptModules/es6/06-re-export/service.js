System.register(['repository'], function(exports_1) {
    var FishService;
    return {
        setters:[
            function (repository_1_1) {
                exports_1({
                    "fishes": repository_1_1["fishes"],
                    "config": repository_1_1["config"]
                });
            }],
        execute: function() {
            FishService = (function () {
                function FishService() {
                }
                FishService.prototype.calculateProfit = function () {
                    console.log('calculating profit...');
                };
                return FishService;
            })();
            exports_1("FishService", FishService);
        }
    }
});
//# sourceMappingURL=service.js.map