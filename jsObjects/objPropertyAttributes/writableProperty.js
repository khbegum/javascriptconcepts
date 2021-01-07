let newObj={}
Object.defineProperty(newObj,'a',{
    value:30,
    writable:true
})
console.log(newObj.a);
newObj.a=70;

console.log((newObj.a))