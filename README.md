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
app.engine('ejs', require('express-beautiful-ejs-engine'));
app.set('view engine', 'ejs');
```