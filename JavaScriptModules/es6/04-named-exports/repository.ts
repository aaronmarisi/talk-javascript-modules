class FishRepository {
    baseUrl;
    private cache = [];

    constructor(url) {
        this.baseUrl = url;
    }

    private checkConnection() {

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

var fishes = new FishRepository('http://mydomain.com/api/fish/');
var config = { utcOffset:'-5' }

export { fishes as fishRepo, config }