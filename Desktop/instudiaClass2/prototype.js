
// function Person(name,age) {
//     this.name = name,
//     this.age = age
// }
// Person.prototype.getDetails = function (){  
//     this.name+" "+this.age
// };

// const person1 = new Person('honoto',35);
// console.log(person1.getDetails);

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

const Arcanine = new Pokemon("Arcanine", "Fire", ["Ember", "Bite", "FlameThrower"]);
const Pikachu = new Pokemon("Pikachu", "Electric", ["Tail Whip", "ThunderBolt", "Agility"]);
const Blastoise = new Pokemon("Blastoise", "Water", ["Water Gun", "Hydro Cannon", "Hyper Beam"]);


Pokemon.prototype.callPokemon = function(){
	console.log(`I choose you, ${this.name}!`);
};
Pokemon.prototype.pType = function () {
    console.log(`${this.name} belongs to ${this.type}`);
};
Pokemon.prototype.attack = function(attack_number){
	console.log(`${this.name}! use ${this.attackList[attack_number]}.`);
};

// Pikachu.callPokemon();
// Arcanine.callPokemon();
// Blastoise.callPokemon();

// Pikachu.attack(0);
// Arcanine.attack(2);
// Blastoise.attack(2);

Pikachu.pType();
Arcanine.pType();
Blastoise.pType();