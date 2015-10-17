import * as fish from 'repository'

console.log('import full module');
console.log(fish.fishes.baseUrl);

console.log(fish.config.utcOffset);

fish.fishes.get('sardines');