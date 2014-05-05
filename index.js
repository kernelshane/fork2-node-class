module.exports = function(obj, parent) {
    var func = obj.initialize || function() {};
    parent = parent || Object;

    func.prototype = new parent();
    func.prototype.constructor = func;

    func.__super__ = parent;

    var _super = parent.prototype;
    for(var key in obj) {
        if(key != 'initialize') {
            if(typeof obj[key] == 'function' && typeof _super[key] == 'function') {
                func.prototype[key] = (function(name, fn) {
                    return function() {
                        var tmp = this._super;
                        this._super = _super[key];
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;
                        return ret;
                    }
                } (key, obj[key]));
            }
            else {
                func.prototype[key] = obj[key];
            }
        }
    }

    var current_class = func;
    func.prototype.super = function(name) {
        var args = Array.prototype.slice.call(arguments, 1);
        var tmp = current_class;
        current_class = current_class.__super__;
        var ret = current_class.prototype[name].apply(this, args);
        current_class = tmp;
        return ret;
    };

    return func;
};
