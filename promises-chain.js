const add = (a,b)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },2000);
    })
}

add(1,2).then((result)=>{
    console.log('first add: ',result);
    return add(result, 3);
})
.then((result)=>{
    console.log('Second add: ',result);
    return add(result,5);
})
.then((result)=>{
    console.log('Third add: ',result);
    add(result,1).then((result)=> console.log('final add: ',result));
})
.catch((e)=>{
    console.log('Error : ',e);
})