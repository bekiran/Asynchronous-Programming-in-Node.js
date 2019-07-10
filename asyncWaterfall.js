// Understanding Asynchronous Programming in Node.js


/***********************************************************************************
 * 
 * @objective : Understanding Async Waterfall
 * 
 * @author: Kiran B.E.
 * 
 * @async waterfall: The async.waterfall() method allows you to pass values between 
 * the functions in a trickle-down manner. The waterfall() method is useful when you need 
 * the results of a previous function to perform an operation with the next function in the series
 * 
 ********************************************************************************/

var async = require("async");//importing async from library

async.waterfall([
  function(callback) {
    callback(null, 12, 15);
  },
  function(a, b, callback) {
    callback(null, (a + b) * 10);
  },
  function(cc, callback) {
    callback(null, Math.sqrt(cc));
  }
], function(error, c) {
  console.log(c);
});