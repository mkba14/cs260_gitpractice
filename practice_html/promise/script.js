let myPromise = new Promise(function(resolve, reject) {
    let x = 1;//+1;
    if(x == 2){
        resolve('success');
    }
    else{
        reject('failure');
    }
})

// Order won't happend necessarily in the same order made....
//  Rest of code will be run until promise finishes
myPromise.then(function(message){
    console.log(message);
}).catch(function(message){
    console.log(message);
})