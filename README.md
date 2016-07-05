# Classify

Write JavaScript classes easily

## How to use Classify

### Use with Node.js / RequireJS

``` bash
npm i -S classify
```

``` javascript
const Classify = require("classify128");

const Logger = Classify({
    prototype: {
        log: function ()
        {
            console.log.apply(console, arguments);
        }
    }
});

const HasName = Classify({
    constructor: function (_super, name)
    {
        _super();
        
        this.name = name;
    },
    
    extends: Logger,
    
    prototype: {
        logName: function ()
        {
            this.log(this.name);
        }
    }
});

var Me = Classify({
    constructor: function (_super)
    {
        _super("Stefan Wimmer");
    },
    
    extends: HasName,
    
    prototype: {
        logTwice: function ()
        {
            this.logName();
            this.logName();
        }
    },
    
    static: {
        instance: function ()
        {
            return new Me();
        }
    }
});

Me.instance().logTwice();
```

### Use in browser

``` html
<script src="classify128.js"></script>
```

``` javascript
var Logger = Classify({
    prototype: {
        log: function ()
        {
            console.log.apply(console, arguments);
        }
    }
});

var HasName = Classify({
    constructor: function (_super, name)
    {
        _super();
        
        this.name = name;
    },
    
    extends: Logger,
    
    prototype: {
        logName: function ()
        {
            this.log(this.name);
        }
    }
});

var Me = Classify({
    constructor: function (_super)
    {
        _super("Stefan Wimmer");
    },
    
    extends: HasName,
    
    prototype: {
        logTwice: function ()
        {
            this.logName();
            this.logName();
        }
    },
    
    static: {
        instance: function ()
        {
            return new Me();
        }
    }
});

Me.instance().logTwice();
```
