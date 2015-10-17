export default class Repository {
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