// Understanding Asynchronous Programming in Node.js


/***********************************************************************************
 * 
 * @objective : Understanding Async parallel
 * 
 * @author: Kiran B.E.
 * 
 * @async Parallel: the async.parallel() method to perform parallel-like executions of your callbacks. 
 * The difference between them is that series() waits for one function to finish before executing the next one; 
 * parallel() does not.
 * 
 ********************************************************************************/

//  1.

var async = require("async"); //importing async from library

async.parallelLimit([
    function (callback) {
        setTimeout(function () {
            console.log("First task");
            callback(null, 1);
        }, 300);
    },
    function (callback) {
        setTimeout(function () {
            console.log("Second task");
            callback(null, 2);
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            console.log("third task");
            callback(null, 3);
        }, 100);
    },
    function (callback) {
        setTimeout(function () {
            console.log("fourth task");
            callback(null, 4);
        }, 500);
    }
], 3, function (error, results) {
    console.log(results);
});


// 2.

var async = require("async");
var stack = [];
var functionOne = function (callback) {
    console.log("First task");
    callback(null, 1)
}
var functionTwo = function (callback) {
    console.log("Second Task");
    callback(null, 2)
}
var functionThree = function (callback) {
    console.log("Third task");
    callback(null, 3)
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function (err, results) {
    console.log(results);

})

// 3.
var async = require('async')
var stack = {}
stack.getUserName = function (callback) {
    var userName = 'Kiran';
    callback(null, userName)
}
stack.getAge = function (callback) {
    var userAge = 22;
    callback(null, userAge)
}
stack.getGender = function (callback) {
    var userGender = 'Male';
    callback(null, userGender)
}
async.parallel(stack, function (err, results) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);

})