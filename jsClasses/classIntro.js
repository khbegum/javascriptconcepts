//here class act as a template
class Employee {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    experience() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
    startingYear(x){
        return x;
    }
  }
 //object creation 
  let newEmployee = new Employee("Ryu", 2018);
  console.log( newEmployee.name+ " working in capgemini since " + newEmployee.experience() + " years and started in the year "+newEmployee.startingYear(newEmployee.year));
