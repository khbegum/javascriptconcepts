class Shape{
    constructor(side1,side2){
        this.side1=side1;
        this.side2=side2;
    }
    area(){
        return this.side1*this.side2;
    }

}
class Rectangle extends Shape{
    //By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    constructor(x,y){
        super(x,y);
    }

}
let product=new Rectangle(2,4);
console.log(product.area());
class Triangle extends Shape{
    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }
    area1(){
        return this.area()*this.z;
    }
}
let product1=new Triangle(2,3,4);
console.log(product1.area1());