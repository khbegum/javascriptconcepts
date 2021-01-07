var newObj={};
Object.defineProperty(newObj,'a',{
    value:30,
    configurable:false,//it disables to delete property
    enumerable:true //it displays object and also keys
})
console.log(newObj);
delete newObj.a

console.log((newObj))