fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(res1 => console.log(res1));

fetch("https://api-football-v1.p.rapidapi.com/v3/predictions")
    .then((res2)=>res2.json())
    .then((res3)=>console.log(res3))
    .catch((err)=>{
        console.log(err)
        console.log('oops something went wrong');
    })
    .finally(()=>{
        console.log('finally block!');
    })
