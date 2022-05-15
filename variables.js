
// function cats(){

//     //console.log(dog);
//    if(true){
//          const dog= 'Tiger';
        
//         console.log(dog);
//         dog = 'Lion';
//         console.log(dog);
//    } 
//    //console.log(dog);

// }
//cats();


function store(){
    
    for(var i=0; i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },1000);
        
    }
}

store();