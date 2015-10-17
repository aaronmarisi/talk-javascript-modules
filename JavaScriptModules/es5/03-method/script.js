var repository = {

    baseUrl: 'http://www.myhost.com/api/',
    get: function (id) {
        console.log('get ' + id);
    },
    update: function (id) {
        console.log('update ' + id);
    },
    remove: function (id) {
        console.log('remove ' + id);
        console.log(this);
    }
};

repository.get(1);
repository.update(2);
repository.remove(3);

console.log(Object.getPrototypeOf(repository.remove));
console.log(repository.remove.constructor);