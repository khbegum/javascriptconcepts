let newObj={}
Object.defineProperty(newObj,'a',{
    value:30,
    enumerable:true
})
console.log(newObj);
for(var key in newObj){
    console.log(key)
}
console.log(Object.keys(newObj))