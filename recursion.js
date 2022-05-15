//// write function to accept base and exponent and return value

////simple(lame) way
var power = (base, exponent) =>{
    let val=1;
    for(let i=exponent; i>0; i--){
        val *=base;
    }
    return val;
}
//console.log(power(2,4));


//// Recursion Way
var powerR = (base, exponent) =>{
if(exponent == 0) return 1;
return base* powerR(base, exponent-1);
}
//console.log(powerR(2, 4));



function factorial(num){
    if(num === 0) return 1;
    if(num === 1) return 1;
    return num*factorial(num-1);
    }
//console.log(factorial(6));
