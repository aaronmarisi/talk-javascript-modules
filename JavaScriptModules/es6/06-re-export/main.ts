import * as fish from 'service'


console.log('re-export module');

var service = new fish.FishService();
service.calculateProfit();

console.log(fish.fishes.baseUrl);
console.log(fish.config.utcOffset);

fish.fishes.update('salmon');