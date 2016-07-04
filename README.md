# Classify

Write JavaScript classes easily

## How to use Classify

### Use with Node.js / RequireJS

``` bash
npm i -S classify
```

``` javascript
const Classify = require("classify");

const AbstractName = Classify({
    prototype: {
        getName: function ()
        {
            throw new Error("Abstract method can not be instantiated!");
        },
        
        logName: function ()
        {
            console.log(this.getName());
        }
    }
});

const MyName = Classify({
    constructor: function (name)
    {
        this.name = name;
    },
    
    extends: AbstractName.prototype,
    
    prototype: {
        getName: function ()
        {
            return this.name;
        }
    },
    
    static: {
        instance: function (name)
        {
            return new MyName(name);
        }
    }
});

MyName.instance("Stefan Wimmer").logName(); // Stefan Wimmer
```

### Use in browser

``` html
<script src="classify.js"></script>
<script src="myclasses.js"></script>
```

``` javascript
var AbstractName = Classify({
    prototype: {
        getName: function ()
        {
            throw new Error("Abstract method can not be instantiated!");
        },
        
        logName: function ()
        {
            console.log(this.getName());
        }
    }
});

var MyName = Classify({
    constructor: function (name)
    {
        this.name = name;
    },
    
    extends: AbstractName.prototype,
    
    prototype: {
        getName: function ()
        {
            return this.name;
        }
    },
    
    static: {
        instance: function (name)
        {
            return new MyName(name);
        }
    }
});

MyName.instance("Stefan Wimmer").logName(); // Stefan Wimmer
```
