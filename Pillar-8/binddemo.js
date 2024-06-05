const Player1={
    firstname:"Aditya",
    lastname:"singh",
    battingno:1,
    getDetails:function(){
        console.log(this.firstname,this.lastname,"comes at no",this.battingno);

    }
}
const obj =Player1.getDetails
console.log(obj());
const x=obj.bind(Player1)
  x();

