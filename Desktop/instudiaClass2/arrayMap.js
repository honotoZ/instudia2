// const numbers = [1, 2, 3, 4, 13, 14, 15]

// function addNum(a,b){
//     console.log('value of loop item[acc - prev + current]');
//     console.log('value of current', b);
//     return a+b;
// }
// function myNum(a, b){
//     console.log('value of loop item[acc - prev + current]');
//     console.log('value of current', b);
//     return a+b;
// }
// const cumulative = numbers.reduce(myNum,1);
// console.log(cumulative);

const rcb = {
    name: 'royal challengers',
    teammates: [
    {
        name: 'virat kohli',
        stats: 
        {
            odi: 253,
            runs: 5000,
        }
    },
    {
        name: 'chris gayle',
        stats: 
        {
            odi: 332,
            runs: 6000,
        }
    }
    ],
    hasPrevious : false,
    manager: 'Andy flower',
    getManagerName: function () {
        return `${this.manager} is the manager for ${this.name}`
    },
    getTeamMateNames: function () {
        return this.teammates.map( member => member.name)
    },
    getTotalTeamRuns: function () {
        return this.teammates.map ( member => member.stats.runs)
    }
}

console.log(rcb.getManagerName())

const student = [12,34,33,1,9,47,22,14,7]
console.log(student.reduce(x,y => x + y))
    
