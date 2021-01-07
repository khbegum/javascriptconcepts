//local or block scope ..these variables are not accessble outside of the block
//if/for/while any loops
//it can accessed for var variable i.e, outside the block 
//for var it is only global and function scope
function some(){
    if(true){
        let localVar=200;
        console.log(localVar);
    }
    //here below it gives a error Reference error as it is local scope variable not accessible out the block
    //console.log(localVar)
}
some();