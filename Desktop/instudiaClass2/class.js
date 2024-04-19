
// class fruit {

//     constructor(name){
//     console.log('this is a constructor')
//     this.name = name;
//     }

//     taste(){
//         console.log('it is sweet!');
//     }
// }
// const apple = new fruit('orange')
// console.log(apple.name);
// apple.taste();

class grocery {

    constructor(weight, color, serialnumber){
        this.weight = weight;
        this.color = color;
        this.serialnumber = serialnumber;
    }
    getWeight(){
       return this.weight
    }
    getColor(){
       return this.color
    }
    getSerialnumber(){
       return this.serialnumber
    }
    setWeight(weight){
        this.weight = weight
    }
    setColor(color){
        this.color = color
    }
    setSerialnumber(serialnumber){
        this.serialnumber = serialnumber
    }
}
const peas = new grocery()
const cucumber = new grocery('1kg','green','1002')
peas.setSerialnumber('1005')
peas.setColor('red')
console.log(peas.getSerialnumber())
console.log(peas.getColor());


