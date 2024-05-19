
class SuperHero {
    constructor(name, power, gf){
        this.name = name;
        this.power = power;
        this.gf = gf;
    }
    getName(){
        return this.name
    }
    getPower(){
        return this.power
    }
    getGf(){
        return this.gf
    }
    setGf(x){
        this.gf = x
    }
}
class Marvel extends SuperHero {
    constructor(name, power, gf, group){
        super(name,power,gf)
        this.group = group;
    }
    getGroup(){
        return this.group
    }
    getCreator(){
        return 'stanley' 
    }
}
class DC extends SuperHero {
    constructor(name, power, gf, group){
        super(name,power,gf)
        this.group = group;
    }
    getGroup(){
        return this.group
    }
    getCreator(){
        return 'nicholson'
    }
}
const spiderman = new Marvel('spiderman','shooting-web','mary jane');
const batman = new DC('bruce wayne','intelligence','catwoman');
console.log(batman.getCreator())
console.log(spiderman.getCreator());
console.log(spiderman.getPower());
console.log(batman.getPower());

console.log(spiderman instanceof DC);


function mul(multi){
    return function(input){
        return input * multi;
    }
}
let x = mul(5);
console.log(x(6));