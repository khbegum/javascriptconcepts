let index=0;
let a=[1,2,3,4,5];
let square=x=>Math.pow(x,2);
let squares=a.map(square);//callback function need to be given
console.log(a);
console.log(squares)
//map is used when a function need to applay on an array elements and convert them to array
//A map applies a function over every element and then returns the new array