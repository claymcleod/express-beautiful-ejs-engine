Express Beautiful EJS Engine
=============================

For those of us who like clean HTML output from express.

Installation
-------------

```
npm install express-beautiful-ejs-engine --save
```

Usage
-------------

``` 
// Overwrite default EJS engine with this one
app.engine('ejs', require('express-beautiful-ejs-engine'));

// Set default engine to our engine
app.set('view engine', 'ejs');
```