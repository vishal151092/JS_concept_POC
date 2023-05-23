
// search Movie

// get movie IMDB ratings  (if > 7)

// get url of movie

// stream movie



let movieNamePromise = ()=>{
    return new Promise(function (resolve, reject){
            //fetch('/getMovieByName')
            setTimeout(()=>{
                resolve("Titanic")
            },2000);
    })
}

let movieIMDBRating = (movieName)=>{
       return new Promise(function (resolve, reject){
            //fetch('/getRating')
            console.log(movieName);
            setTimeout(()=>{
                resolve(9)
            },2000);
        })
}

let movieUrl =  (rating)=>{
        return new Promise(function (resolve, reject){
                //fetch('/getURL')
                console.log(rating);
                setTimeout(()=>{
                    reject("/netflix/titanic/hd")
                },2000);
            })
}

let streamMovie = (url)=>{
        return new Promise(function (resolve, reject){
                    //fetch('/stream')
                    console.log(url);
                    setTimeout(()=>{
                        resolve("stream starts")
                    },2000);
                })
}



movieNamePromise().then(function (result){
    //console.log("chain: ",result);
    return movieIMDBRating(result);
})
.then(function (result2){
    //console.log("chain: ",result2);
    return movieUrl(result2);
})
.then(function (result3){
    //console.log("chain: ",result3);
    return streamMovie(result3);
})
.then(function (result4){
    console.log("chain: ",result4);
})
.catch(function (error){
    console.log("something went wrong")
}).finally(()=>{
    console.log("COMPLETED !!");
})

