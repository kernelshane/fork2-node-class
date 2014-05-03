module.exports = function Class(obj) {
    var constructor;
    if (obj.hasOwnProperty('initialize')) {
        constructor = obj.initialize;
    }
    else 
        constructor = function () {};
    for (var key in obj) {
        if (key != 'initialize' && typeof obj[key] == 'function') {
            constructor.prototype[key] = obj[key];
        }
    }
    return constructor;
};

