define('readingService',
    ['dracula', 'citiesTale'],

    function (narrator, book) {

        return {
            read: function () {
                console.log(narrator.name + ' reads: \'' + book.content + '\'.');
            }
        };
    }
);