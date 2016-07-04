/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 04.07.16.
 */

const Classify = function (pClass = {})
{
    const _class = function ()
    {
        if (this.constructor !== _class)
            throw new Error("Class must be instantiated!");
        
        (pClass.constructor || function () {}).apply(this, arguments);
    };
    
    _class.prototype = Object.create(pClass.extends || {});
    _class.prototype.constructor = _class;
    
    Object.assign(_class.prototype, pClass.prototype || {});
    
    Object.assign(_class, pClass.static || {});
    
    return _class;
};

Classify.version = () => require("./package.json").version;

module.exports = Classify;
