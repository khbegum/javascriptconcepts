
//A callback is a function passed as an argument to another function.
//callback is a function ..passed as an argument to another function
//Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished
function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2,myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5,myDisplayer);

  //In the example above, myDisplayer is the name of a function...act as a callback function it will be executed after myCaluclator execution completes

//It is passed to myCalculator() as an argument.

//When you pass a function as an argument, remember not to use parenthesis.
 