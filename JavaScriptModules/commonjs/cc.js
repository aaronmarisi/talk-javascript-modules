(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function () {
    return {
        content: 'It was the best of times, it was the worst of times...'
    };
}());
},{}],2:[function(require,module,exports){
module.exports = (function () {
    return {
        name: 'Dracula'
    };
}());
},{}],3:[function(require,module,exports){
var readingService = require('./readingService.js');

readingService.read();
    
},{"./readingService.js":4}],4:[function(require,module,exports){
module.exports = (function () {

    var narrator = require('./dracula.js');
    var book = require('./citiesTale.js');

    return {
        read: function () {
            console.log(narrator.name + ' reads: \'' + book.content + '\'.');
        }
    };
}());

},{"./citiesTale.js":1,"./dracula.js":2}]},{},[3]);
