const arr=[234,110,11,10,1,12,14,3,];
arr.sort((a,b)=>{
    return a-b;
});
console.log(arr);

setTimeout(()=>{
    console.log("hello world");
},3000);// callback function in setTimeout 