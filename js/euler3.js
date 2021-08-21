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
function getFirstPrimeFactor() {
    while (true) {
        if(ref % i === 0){
            return i;
        }
        i += 2
    }
}
let firstPrime = getFirstPrimeFactor();
while (possibleFactors[possibleFactors.length-1] < Math.sqrt(ref / firstPrime)) {
    if (ref % spokefive === 0) {
        possibleFactors.push(spokefive)
        spokefive += 12
    } else {
        spokefive += 12
    }
    if (ref % spokeseven === 0) {
        possibleFactors.push(spokeseven)
        spokeseven += 12
    } else {
        spokeseven += 12
    }
    if (ref % spokeeleven === 0) {
        possibleFactors.push(spokeeleven)
        spokeeleven += 12
    }
    else {
        spokeeleven += 12
    }
    if (ref % spokeone === 0) {
        possibleFactors.push(spokeone)
        spokeone += 12
    }
    else{
        spokeone += 12
    }
}
function checkPrime(arrayOfPossiblePrimes) {
    i = 3
    while (i < arrayOfPossiblePrimes[arrayOfPossiblePrimes.length-1]) {
        if (arrayOfPossiblePrimes[arrayOfPossiblePrimes.length-1] % i === 0) {
            arrayOfPossiblePrimes.pop();
            i=1;
        }
        i += 2;
    }
    return arrayOfPossiblePrimes[arrayOfPossiblePrimes.length-1];
}
console.log(checkPrime(possibleFactors));
console.log(performance.now()-currentTime);
// so here we're employing a 12 spoke number wheel

// while (y == 0):   #this gives us the first prime divisor 71,
//     x += 1        #none of the other factors should be bigger than ref/71
// if (ref % x == 0):
// y = x
// print (y)
//
// print(stack[-1])
// while (stack[-1] < math.sqrt(ref / y)):
// if (ref % 2 == 0):
// stack.append(2)
// print (2)
// x += 1
// if (ref % 3 == 0):
// stack.append(3)
// print (3)
// if (ref % spokefive == 0):
// stack.append(spokefive)
// print (spokefive)
// spokefive +=12
// else:
// spokefive +=12
// if (ref % spokeseven == 0):
// stack.append(spokeseven)
// print (spokeseven)
// spokeseven +=12
// else:
// spokeseven +=12
// if (ref % spokeeleven == 0):
// stack.append(spokeeleven)
// print(spokeeleven)
// spokeeleven +=12
// else:
// spokeeleven +=12
// if (ref % spokeone == 0):
// stack.append(spokeone)
// print(spokeone)
// spokeone += 12
// else :
// spokeone +=12
// print (stack[-1])
// x = 3
// squrtofnumber = math.sqrt(stack[-1])
// while (x < squrtofnumber):
// if (stack[-1] % x == 0):
// print ("popping")
// stack.pop()
// squrtofnumber = math.sqrt(stack[-1])
// x = 1
// x +=2
// print ("Finally, at long last, the largest prime factor is:")
// print (stack[-1])