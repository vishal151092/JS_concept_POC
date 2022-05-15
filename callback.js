const workCallback = (callback) =>{

    console.log("inside work");
    setTimeout(()=>{
        //callback('This is my error', undefined);
        callback(undefined, ['vishal','vidit'], fun3);
    },2000);

}

const fun2 = (error, result, callback2)=>{
    if(error){
        return console.log(error); 
    }
    
    console.log(result);
    callback2(undefined, result);
}

const fun3 = (error, data) =>{
    if(error) return console.log(error)
    console.log(data.map(val=> val.toUpperCase()));
}

workCallback(fun2);