System.register(['service'], function(exports_1) {
    var fish;
    var service;
    return {
        setters:[
            function (fish_1) {
                fish = fish_1;
            }],
        execute: function() {
            console.log('re-export module');
            service = new fish.FishService();
            service.calculateProfit();
            console.log(fish.fishes.baseUrl);
            console.log(fish.config.utcOffset);
            fish.fishes.update('salmon');
        }
    }
});
//# sourceMappingURL=main.js.map