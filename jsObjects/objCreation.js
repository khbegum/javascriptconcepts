var person={
    fname:"khairunnisa",
    lname:"begum",
    age:"60"
}
var txt=" ";
var x;
for(x in person){  
txt=txt+person[x]+" ";
    }
console.log(txt);
// person.nationality="Indian";
// console.log(person);
// delete person.age;
// console.log(person);
// person.age=70
// //allows property value to be changed
// Object.defineProperty(person,'age',{
//     value:1,
//     writable:true
// });
// console.log(person)

// person.age=30;
// console.log(person)
// //doenot allow property to be chnged (writble:false)
// Object.defineProperty(person,'age',{
//     value:1,
//     configurable:false
   
    
// });
// person.age=70
// console.log(person)