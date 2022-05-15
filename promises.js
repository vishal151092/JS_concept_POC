const workPromise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        
        //reject("Something went wrong");
        resolve(['user','admin']);
    },2000)
}); 

workPromise.then((result)=>{
console.log(result);
}).catch((e)=>{
console.log('Error: ',e);
});



/**
 *                              ---------> Fulfilled (resolved)
 *  Action1-------------Pending	
 *                              ---------> Rejected ( rejected)
 * 
 */