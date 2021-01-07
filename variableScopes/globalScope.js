//As it is a global variable can access that  any where with in the program
//defining outside the class/function/bock acts as a global variable
let name="khairu";
let show=(msg)=>{
    //here i have used template strings using back ticks 
    console.log(`${name} greets ${msg}`);

}

class DisplayName{
     display=()=>{
         for (let index = 0; index <3; index++) {
            console.log(name)
             
         }
        
        }
}
let x=new DisplayName();
x.display()
show("Good Morning")
