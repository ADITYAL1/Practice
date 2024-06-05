const Player1={
    firstname:"Aditya",
    lastname:"singh",
    battingno:1,
    getDetails:function(){
        console.log(this.firstname,this.lastname,"comes at no",this.battingno);

    }
}

const obj=function (v,b){
    console.log(v,b)
    this.getDetails();
}
obj.call(Player1,8,9)