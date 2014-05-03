module.exports = function Class(obj) {
    if (obj.hasOwnProperty('initialize')) {
        return obj.initialize;
    }
    else
        return function () {};
};

