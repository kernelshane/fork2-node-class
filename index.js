module.exports = function Class(obj, parent) {
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
    if (parent) {
        for (var key in parent.prototype) {
            if (typeof parent.prototype[key] == 'function') {
                constructor.prototype[key] = parent.prototype[key];
            }
        }
    }
    return constructor;
};

