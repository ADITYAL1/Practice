let a=10;
Promise.resolve().then(()=>{
    console.log("promise resolved");
})
process.nextTick(()=>{
    console.log("next tick executed")
})
process.nextTick(()=>{
    console.log("next tick executed1")
})
process.nextTick(()=>{
    console.log("next tick executed2")
})
setTimeout(()=>{console.log("timer completed")},0)
console.log(a);