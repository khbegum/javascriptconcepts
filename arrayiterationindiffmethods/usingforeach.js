let index=0;
let a=[1,2,3,4,5,6];
a.forEach(iterate);
function iterate(item,index){
    console.log(item)
}
//above code can written in arrow function
a.forEach(item=>
    console.log(item));