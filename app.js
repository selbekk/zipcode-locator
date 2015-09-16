// Transpile all subsequent includes from ES6 to ES5
var babel = require("babel/register");

// Add support for ES6 specific methods (not provided by Babel)
require('es6-shim');

// Start the server!
var server = require('./src/backend/server');
