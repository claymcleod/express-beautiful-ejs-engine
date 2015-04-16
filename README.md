Express Beautiful EJS Engine
=============================

A replacement engine for EJS that beautifies the HTML output.

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