let p=6;//declaration
console.log(p)
//you cannot redeclare variable using let rather u can update
 p=7;//updation
console.log(p);
//scope level
let winner=true;
if(p>0){
    let winner=false; //even though it allows redeclaration but doesn't upodate
    
}
console.log(winner);//output true
if(p>0){
     winner=false; //here winner is updated
    
}
console.log(winner);//output false
for(let i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
      console.log('The number is ' + i);
    }, 1000);
}
