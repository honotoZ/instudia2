function loadScript(name, cb1, cb2, cb3, cb4) {
    if(typeof(name)==='string'){
        let value = cb1()
        if(value > 10){
            let value = cb2()
            if(value < 0){
                let value = cb3()
                if(value % 2 !== 0){
                    cb4()
                }
            }
        } 
        return
    }
    console.log('This is not valid file');
}
// loadScript('honoto',(z)=>{console.log('Im callback');})
let a = function x(){
    console.log('Im callback 1');
    return 11
}
let b = function y(){
    console.log('Im callback 2');
    return -2
}
let c = function z(){
    console.log('Im callback 3');
    return 3
}
let d = function q(){
    console.log('Im callback 4');
}

loadScript('text', a, b, c, d);