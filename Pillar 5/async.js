
console.log("hi");
timeconsumebyLoop();
timeconsumebyRuntime0();
timeconsumebyRuntime1();
timeconsumebyRuntime2();
console.log("bye");



function timeconsumebyLoop(){
     console.log("inside for loop ");
    for(let i=0;i<1000000;i++){
        
    }
    console.log("outside for loop ");
}
function timeconsumebyRuntime0(){
    console.log("timer started")
    setTimeout(()=>{
        console.log("timer executed");
        for(let i=0;i<1000000;i++){

        }
    },5000)
}
function timeconsumebyRuntime1(){
    console.log("timer started")
    setTimeout(()=>{
        console.log("timer executed");
       
    },0)
}
function timeconsumebyRuntime2(){
    console.log("timer started")
    setTimeout(()=>{
        console.log("timer executed");
       
    },200)
}



