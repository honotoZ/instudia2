const myPromise = new Promise((resolve, reject)=>{
    if(resolve){
        resolve('This is a resolve message');
    }else{
        reject('This is a reject message');
    }
})

myPromise
    .then((value)=>console.log(value))
    .catch((value)=>console.log(value))

// if sum is greater than 22 resolve else reject

// function sum(a,b){
//     return a+b;
// }
// const cake = new Promise((resolve, reject)=>{
//     let num = sum(16,9);
//     if(num > 22){
//         resolve('This is resolve');
//     }else{
//         reject('This is reject');
//     }
// })
// cake
//     .then((value)=>console.log(value))
//     .catch((value)=>console.log(value))





