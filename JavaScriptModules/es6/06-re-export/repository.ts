export class FishRepository {
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

export var fishes = new FishRepository('http://mydomain.com/api/fish/');
export var config = { utcOffset:'-5' }