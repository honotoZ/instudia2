class Animal{
   
    static eat(name, food){
        return `${name} eats ${food}`
    }
     
    static behave(name,food){
        console.log(`${name} says bark bark and eats ${food}`);
    }
}

console.log(Animal.eat('german_shepard','pedigree'));
console.log(Animal.behave('alsasian','fish'));

class Math {
    static Pi = 3.14;

    static getAreaOfCircle(radius){
        return this.Pi * radius * radius
    }
}
console.log(Math.getAreaOfCircle(2));