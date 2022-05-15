

/** Hoisting */
var userFunction = function(){
        console.log(a);
        let a=10;
        console.log(a);
    }

    userFunction();
















/** IIFE */

//  (function(){
//     console.log(a);
//     let a=10;
//     console.log(a);
// })()




/** Closures */

// let fun1 = function(data1){

//     var data2 = 10;

//     var fun2 = function(data3){
//         var aa ="Hi"
//           console.log( `data3 is ${data3} `);  
//           console.log( `data2 is ${data2} `); 
//           console.log( `data1 is ${data1} `); 
//     }


//     return fun2;
// }

 //var output = fun1('vishal');

 //output('chandrakant');

 //fun1('vishal')('chandrakant');



//sum(2,3,4);

//const sum = (a,b,c) => a+b+c;

//2+3+4

// let aa = sum(2)(3)(4);
// console.log(aa);

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }




// function cats(){
//     console.log(dog);
//    if(true){
//         var dog= 'Tiger';
//         console.log(dog);
//    } 
//    console.log(dog);

// }

//cats();

