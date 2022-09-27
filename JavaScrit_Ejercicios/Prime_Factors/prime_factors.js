/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/



var getPrimeFactors = function (n) {
    "use strict";

    
    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    if(isPrime){

    var i, sequence = [];

    for (i = 2; i <= n; i++){


        if (n % i ===0){
           //"Found factor of n
            if(isPrime(i)){
                console.log("Found prime factor of "+n)
                sequence.push(i);
            }
            
        }
    }
 }
    

    console.log("This number is a prime? : "+ isPrime(n))
    document.getElementById('result').innerHTML = "This number is a prime? : "+ isPrime(n);
    document.getElementById('result1').innerHTML ="The prime factors for this number are:" +sequence;
    return sequence;
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
//console.log(getPrimeFactors(30030));

//console.log("The prime factors for this number are:" + getPrimeFactors(30031));

