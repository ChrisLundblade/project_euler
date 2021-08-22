'use strict';
// What is the largest prime factor of the number 600851475143 ?
let currentTime = performance.now();
let ref = 600851475143
let spokefive = 5
let spokeseven = 7
let spokeeleven = 11
let spokeone = 13
let i = 3;
let possibleFactors = [1];
//In here, with the spokes, I employ a 12 spoke number wheel.
//It's not mathematically proven for all primes (there are a lot of primes) but the theory goes
//that all primes except for 2 and 3 fall along the first, fifth, seventh and eleventh spokes
//of a 12-spoke number wheel. This allows us to count out around 75% of all integers in our search
//which saves a lot of time in solving this problem which can take an extremely long time to solve
//even with the help of a powerful computer processor
while (possibleFactors[possibleFactors.length-1] < Math.sqrt(ref)) {
    if (ref % spokefive === 0) {
        possibleFactors.push(spokefive);
        spokefive += 12;
    } else {
        spokefive += 12;
    }
    if (ref % spokeseven === 0) {
        possibleFactors.push(spokeseven);
        spokeseven += 12;
    } else {
        spokeseven += 12;
    }
    if (ref % spokeeleven === 0) {
        possibleFactors.push(spokeeleven);
        spokeeleven += 12;
    }
    else {
        spokeeleven += 12;
    }
    if (ref % spokeone === 0) {
        possibleFactors.push(spokeone);
        spokeone += 12;
    }
    else{
        spokeone += 12;
    }
}
function checkPrime(arrayOfPossiblePrimes) {
    i = 3
    while (i < Math.sqrt(arrayOfPossiblePrimes[arrayOfPossiblePrimes.length-1])) {
        if (arrayOfPossiblePrimes[arrayOfPossiblePrimes.length-1] % i === 0) {
            arrayOfPossiblePrimes.pop();
            i=1;
        }
        i += 2;
    }
    return arrayOfPossiblePrimes[arrayOfPossiblePrimes.length-1];
}
//the following function increases the array length so we can't just use .length
let currentArrLength = possibleFactors.length;
//all the numbers in possibleFactors when multiplied by some other integer === ref
//this loop puts those numbers into the array as well
for (i = 0; i < currentArrLength; i++){
    possibleFactors.push(ref/possibleFactors[i]);
}
//sorting so the biggest number is at the end
possibleFactors.sort(function(a, b){return a - b});
console.log(checkPrime(possibleFactors));
console.log(performance.now()-currentTime);