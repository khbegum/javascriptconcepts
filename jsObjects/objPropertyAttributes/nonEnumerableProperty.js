let newObj={}
Object.defineProperty(newObj,'a',{
    value:30,
    enumerable:false
})
console.log(newObj);
//as enumerable attribute is false it doesnot give values of keys
for(var key in newObj){
    console.log(key)
}
console.log(Object.keys(newObj))