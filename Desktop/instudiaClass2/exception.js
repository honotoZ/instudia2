// const makeSuccessAPIcall = ()=>{
//     fetch("https://api.chucknorris.io/jokes/rando")
//     .then((res)=>res.JSON())
//     .then((res)=>console.log(res))
// };
// const makeFailedAPIcall = ()=>{
//     throw new Error("The page your looking for is not found!")
// };
// try{
// makeFailedAPIcall();
// }catch(e){
//     console.log("inside catch");
//     console.log("you caught not found exception");
//     console.log(e.message);
// }finally{
//     console.log("i always work!")
// }

const APICall = ()=>{
    fetch("https://api-football-v1.p.rapidapi.com/v3/predictions")
    .then((res)=>res.JSON())
    .then((res)=>console.log(res))
};
const ErrorApiCall = ()=>{
    throw new Error("The page your looking for is not found!")
};

try{
    ErrorApiCall();
}catch(e){
    console.log('Some Error message');
    console.log(e.message);
}finally{
    console.log('This is a finally message!');
}