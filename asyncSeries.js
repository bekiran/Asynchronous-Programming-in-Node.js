// Understanding Asynchronous Programming in Node.js


/***********************************************************************************
 * 
 * @objective : Understanding Async series
 * 
 * @author: Kiran B.E.
 * 
 * @async Series: The series() method takes an array of functions as an argument. 
 * The functions are executed in the order in which they exist in the array.
 * 
 ********************************************************************************/

// 1.
var async = require("async"); //importing async from library
async.series([
    function (callback) {
        setTimeout(function () {
            console.log("First task completed");
            callback(null, 'Gunjan')
        }, 300);
    },
    function (callback) {
        setTimeout(function () {
            console.log("Second task completed");
            callback(null, 'Parameshwar')

        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            console.log("third task completed");
            callback(null, 'Kiran')

        }, 100);
    }
], function (err, results) {
    console.log(results);

})


// 2.

var async = require('async')

var stack = [];

var side1 = 5;
var side2 = 6;
var side3 = 7;
var width = 5;
var height = 7;

var functionOne = function (callback) {
    console.log("area of triangle");
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    callback(null, area)
}
var functionTwo = function (callback) {
    console.log("area of rectangle");
    var rectangle = width * height;
    callback(null, rectangle)
}

stack.push(functionOne);
stack.push(functionTwo);

async.series(stack, function (err, results) {
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
async.series(stack, function (err, results) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);

})