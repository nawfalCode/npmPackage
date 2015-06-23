# UUID with Prefix
Adds bytes as prefix to the standared uuid 

How to Install 
------------
```
npm install uuid-prefix
```

How to Use
----------
in Node.js:
```
var uuid = require('uuid-prefix');
```
now, get the new uuid:

```
var newUuid=uuid.getUuidV1([33,22,55,123,2]);
```

License
-------
This package is licensed under MIT license.


