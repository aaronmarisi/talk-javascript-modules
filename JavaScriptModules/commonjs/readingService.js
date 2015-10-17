module.exports = (function () {

    var narrator = require('./dracula.js');
    var book = require('./citiesTale.js');

    return {
        read: function () {
            console.log(narrator.name + ' reads: \'' + book.content + '\'.');
        }
    };
}());
