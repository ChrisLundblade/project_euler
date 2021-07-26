'use strict';
//Euler 2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var i=1; //lead counter. Will have the higher number
var otheriterator = 1; //secondary counter
var valueholder; // just used to facilitate

var fibonacciSum =0;
while (i <= 4000000){
    if (i%2===0){   //this examines i, the one that will only be higher and adds it to the sum if it's even.
        fibonacciSum +=i; //we only consider i because the second iterator will only ever be values that i has been before
    }
    valueholder = i;
    i += otheriterator;
    otheriterator = valueholder;
}
console.log(fibonacciSum);