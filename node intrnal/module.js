module.exports.linear=(arr,key)=>{
for(let i=0;i<arr.length;i++){
    if(arr[i]===key){
        return i;
    }

}
return "key not found"
}
