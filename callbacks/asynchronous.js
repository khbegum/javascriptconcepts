var fs = require("fs");
function display(data){
    console.log("Asynchronous read: " + data.toString());
    
}

fs.readFile('hello.txt', function(err, data) {
   if (err) {
      return console.error(err);
   }
   display(data);
});
//here function(err,data )act as callback function,it cannot executed until file has been read
