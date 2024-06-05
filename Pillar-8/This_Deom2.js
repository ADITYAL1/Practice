const car={
    name:"maruti",
    price:20000,
    desc:"this is maruti 800",
    display(){
        const bike = {
          name:"GT 650",
          price: 450000,
          print :()=>{
            console.log(this);
          }


        }
        bike.print();



    }


}

car.display();