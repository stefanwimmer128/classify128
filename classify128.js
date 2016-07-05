/**
 * Created by Stefan Wimmer <stefanwimmer128@gmail.com> on 04.07.16.
 */

const Classify = function (pClass = {})
{
    const _class = function ()
    {
        if (this.constructor !== _class)
            throw new Error("Class must be instantiated!");
        
        const _this = this;
        
        const args = [ __super.bind(_this) ];
        
        Array.prototype.forEach.call(arguments, a => args.push(a));
        
        __class.constructor.apply(this, args);
    };
    
    const __class = {
        constructor: pClass.constructor || function (_super)
        {
            _super();
        },
        
        extends: pClass.extends || Object,
        
        prototype: pClass.prototype || {},
        
        static: (function ()
        {
            const pStatic = pClass.static || {};
            const _static = {};
            for (const i in pStatic)
            {
                if (i !== "_class" && i !== "_super")
                    _static[i] = pStatic[i];
            }
            return _static;
        })()
    };
    
    const __super = function ()
    {
        if (typeof __class.extends._class === "undefined")
            __class.extends.apply(this, arguments);
        else
        {
            const _this = this;
            
            const args = [ __class.extends._super.bind(_this) ];
            
            Array.prototype.forEach.call(arguments, a => args.push(a));
            
            __class.extends._class.constructor.apply(this, args);
        }
        
        Object.assign(this, _class.prototype);
    };
    
    _class.prototype = Object.create(__class.extends.prototype);
    
    _class.prototype.constructor = _class;
    
    Object.assign(_class.prototype, __class.prototype);
    
    Object.assign(_class, __class.static);
    
    Object.assign(_class, {
        _class: __class,
        _super: __super
    });
    
    return _class;
};

Classify.version = () => require("./package.json").version;

module.exports = Classify;
