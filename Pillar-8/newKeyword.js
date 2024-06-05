class Product{
    #name;
    #price;


   constructor(n,p,d){
        
       this.#name=n,
        this.#price=p
       this.description=d
       

    }
     setprice(p){
      if(p<0){
        console.log("invalid price")
        return}
      this.#price=p;
     }

    display(){
     console.log(this.#name,this.#price,this.description)

    }
}
const p =new Product("samsungA12",599009,"100gb ram 50gb rom");//new create javascript object & Product() is calling the  constructor of that class
console.log(p);
p.name=-1;
console.log(p)
p.setprice(0)
p.display();
