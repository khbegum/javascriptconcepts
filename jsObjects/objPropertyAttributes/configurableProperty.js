var newObj={
    a:30
};
Object.defineProperty(newObj,{
    
    configurable:true,//it enables to delete property
    enumerable:true //it displays object and also keys
})
console.log(newObj);
delete newObj.a

console.log((newObj))