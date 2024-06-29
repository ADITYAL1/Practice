const fs =require('fs');
fs.writeFile('/new.txt',"hello",(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
          console.log("succesfully written")
        }
});
