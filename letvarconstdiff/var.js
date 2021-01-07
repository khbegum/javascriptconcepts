var p=6;//declaration
console.log(p)
//you can redeclare variable using var
 var p=7;//updation
console.log(p);
//scope level
var winner=true;
if(p>0){
    var winner=false; //it allows redeclaration and as it is not declared in a function it act as a global declaration
    
}
let check=(msg)=>{
var p=90;//hence it is declared in function it doesn't act as a global variable
console.log(msg+" "+p);//it is only function scope
}
check("hello")
console.log(p)
console.log(winner);//output is false

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i)
console.log(i)
for(var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
      console.log('The number is ' + i);
    }, 1000);
}
console.log(i)