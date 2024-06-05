function a(a,b){
    this.name=a;
    this.last=b;
    this.display=function(){
        console.log(this)
    }
}
const b=new a("aditya","singh");
console.log(b);