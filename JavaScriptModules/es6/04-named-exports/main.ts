import { fishRepo, config } from 'repository'

console.log('named exports');
console.log(fishRepo.baseUrl);

console.log(config.utcOffset);

fishRepo.get('tuna');