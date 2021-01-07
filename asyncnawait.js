async function myDisplay() {
    let myPromise = await function(myResolve, myReject) {
     let x=1;
        if(x==1)
        myResolve("GoodMornng");
        else
        myReject("Good Afternoon")
    };
    console.log(myPromise);
  }
  
  myDisplay();