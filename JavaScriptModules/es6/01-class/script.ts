class Repository {

    baseUrl;
    cache = [];

    constructor(url) {
        this.baseUrl = url;
    }

    checkConnection() {

    }

    get(id) {
        console.log('get ' + id);
    }

    update(id) {
        console.log('update ' + id);
    }

    remove(id) {
        console.log('remove ' + id);
    }
}

var repo = new Repository('http://mydomain.com/api/');

console.log(repo.baseUrl);
// console.log(repo.cache); inaccessible

repo.get(1);
repo.update(2);
repo.remove(3); 