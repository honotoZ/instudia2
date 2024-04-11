
// const basket = {
//     orange: 2,
//     banana: 5,
//     kiwi: 3,
//     apricot: 6,
//     apple: {
//         kashmiri: {
//             wnumber:2
//         },
//         himachal: 7,
//     }
// }

// console.log(Object.keys(basket));
// console.log(Object.values(basket));
// console.log(Object.entries(basket));

// for(item in basket){
//     console.log(item);
// }
// let a = basket.kiwi
// let b = basket.apricot
// console.log(a);
// console.log(b);

// let {orange, banana, kiwi, apple:{kashmiri:{wnumber}}} = basket;
// console.log(wnumber);

// //IIFE
// let x = (function(){
//     console.log("hi good morning!");
// })()

//copy by reference
// let x = ""
// let y = x

// console.log(x === y);

let x = {
    name:'jason',
    age:35,
    address:{
        city:'dimapur',
        pincode:797112,
    }
}
// // deep cloning
// let z = Object.assign({location:'bahamas'},{climate:'tropical'},x)
// console.log(z);
// let zClone = structuredClone(x)
// console.log(zClone);

// //Object.freeze(x)
// Object.freeze(x);
// console.log(x);
// console.log(Object.isFrozen(x));
// x.address.city = 'guwahati'
// console.log(x);

// //Object.seal
// Object.seal(x)
// console.log(Object.isSealed(x));
// x.color="green"
// console.log(x);

//preventExtensions

const str = new String('hello world')
console.log(str);
