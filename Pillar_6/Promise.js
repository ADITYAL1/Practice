function createPromise(){
    return new Promise(function exec(resolve,reject){
        console.log("Resolving the Promise");
        resolve('ho gya');
    })
}
setTimeout(function adi(){
console.log("timer completed")

},4000)
let p=createPromise();
p.then(function fullfillHandler0(value){    //stored in microtask queue which has higher priority then call back queue
    console.log("fullfilled with value",value);
} ,function rejecthadle(){}
)
p.then(function fullfillHandler1(value){
    console.log("fullfilled with value",value);
} ,function rejecthadle(){}
)
p.then(function fullfillHandler2(value){
    console.log("fullfilled with value",value);
} ,function rejecthadle(){}
)
console.log("ending");

