
function sayHello(){
    console.log("hello");
}

function greet(name, zxc){
    console.log(`${name} says`);
    zxc();
}

greet('honoto',sayHello);