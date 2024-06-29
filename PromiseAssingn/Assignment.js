function download(url,cb){

    console.log("download start from the",url);
    setTimeout(()=>{
        console.log("download completed");
        cb("adcd");
    },5000)
}
function writeFile(content,cb){
    console.log("writing in the file started");
    setTimeout(()=>{
        console.log("sucessfully written in the file",content);
        const filename="new"
        cb(filename);
    },5000)
}
function upload(url,filename,cb){
    console.log('upload of the file started');
    setTimeout(()=>{
        console.log("upload completed of the file "+filename+" from the "+ url);
        cb("sucess");
    })
}

const url="xyz.com"
   download(url,(data)=>{
   console.log("downloaded data",data);
   writeFile(data,(filename)=>{
       console.log("data written in the file",filename);
       upload(url,filename,(res)=>{
           console.log("upload status",res);
       })
   })
   })
