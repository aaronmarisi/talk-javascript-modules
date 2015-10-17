System.register(['repository'], function(exports_1) {
    var fish;
    return {
        setters:[
            function (fish_1) {
                fish = fish_1;
            }],
        execute: function() {
            console.log('import full module');
            console.log(fish.fishes.baseUrl);
            console.log(fish.config.utcOffset);
            fish.fishes.get('sardines');
        }
    }
});
//# sourceMappingURL=main.js.map