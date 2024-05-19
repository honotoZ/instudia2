function sum(...args){
    let num = 0;
    for(let n of args){
        num += n;
    }
    return num;
}
let result = sum(13,7,5,15);
console.log(result);