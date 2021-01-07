//squence control ...sometimes u need call the function according to ur requiement
function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);
  //here u need to call two functions to display the result