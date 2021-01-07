//here to display....we need to run myCalculator unless that it never displays
function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  let result = myCalculator(5, 5);
 