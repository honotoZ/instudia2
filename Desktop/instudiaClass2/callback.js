
function sayHello(){
    console.log("hello");
}

function greet(name, callback){
    console.log(`${name} says`);
    callback();
}

greet('honoto',sayHello);