module.exports = function Class(obj, parent) {
    var constructor = obj.initialize || function() {};
    var ctor = function() {};
    parent = parent || Object;
    ctor.prototype = parent.prototype;
    constructor.prototype = new ctor();
    constructor.prototype.constructor = constructor;

    for(var key in obj) {
        if(obj.hasOwnProperty(key) && key != 'initialize') {
            constructor.prototype[key] = obj[key];
        }
    }

    constructor.__super__ = parent;

    return constructor;
};


