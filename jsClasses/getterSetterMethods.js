class Car {
    constructor(brand) {
      this.carname = brand;
    }
    //cnam is a property
    // getter n setters no need to be same as property name
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  let myCar = new Car("Ford");
  console.log(myCar.carname)
  console.log(myCar.cnam);