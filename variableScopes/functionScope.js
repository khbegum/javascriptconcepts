//these variables can be accessed within function/class and cannot be accessed outside
class FunctionScope{
    
    display(x){
        
        let person=x;
        console.log(person+" hi");
//show();
    }

    //person variable is not accessable here as it is out of the function/method
    // show(){
    //     console.log(person);
    // }
    
}
x=new FunctionScope();

x.display("James")

