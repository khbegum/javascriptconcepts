
//default js acts a hoisting only declaration is hoisted not initialization

x=5;
console.log(x);
var x;
//like eventhough u declare at end of the program it's ok but if initialize variable it gives response undefined
var y;
console.log(y);
y=8;
