//static class can have static methods 
//in this objects cannot access static methods only the main class can access those amethods
class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
    }
    static hello(){
        return "hello";
    }
    static carName(name){
        console.log("carName is "+name)
    }
}
//static method is only accessed by class
console.log(Car.hello())
let x=new Car("Skoda","rapid");
//in the below case object paremeter is passed to static method and invoked through class
Car.carName(x.name);

