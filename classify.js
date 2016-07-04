/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 04.07.16.
 */

const Classify = function (pClass = {})
{
    const _class = function ()
    {
        const _this = this;
        
        const args = [
            function ()
            {
                (pClass.extends || Object).apply(_this, arguments);
                Object.assign(_this, _class.prototype);
            }
        ];
        
        Array.prototype.forEach.call(arguments, a => args.push(a));
        
        (pClass.constructor || function (_super) { _super(); }).apply(this, args);
    };
    
    _class.prototype = Object.create((pClass.extends || { prototype: {} }).prototype);
    _class.prototype.constructor = _class;
    
    Object.assign(_class.prototype, pClass.prototype || {});
    
    Object.assign(_class, pClass.static || {});
    
    return _class;
};

Classify.version = () => require("./package.json").version;

module.exports = Classify;
