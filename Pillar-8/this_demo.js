const iphone={
     name:"iphone",
     price:10000,
     rating:4.5,
     display(){
      console.log("first",this.name);
     }
}
 iphone.display();
 const macBook={
  name:"Macbook",
  price:134000,
  rating:4.9,
  display:()=>{
   console.log("second",this);
  }
}
macBook.display();
