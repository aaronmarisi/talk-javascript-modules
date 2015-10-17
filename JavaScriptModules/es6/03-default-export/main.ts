import Repository from 'repository'

var repo = new Repository('http://mydomain.com/api/');

console.log('default export');
console.log(repo.baseUrl);

repo.get(1);
repo.update(2);
repo.remove(3); 