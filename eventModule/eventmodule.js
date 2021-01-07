
//Generally node js is a single threaded,but it make concurrency calls by using events
//node thread keeps the events in a loop ,when a event is completed another event is fired bcoz of that eventhandler will be invoked to execute
//Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners 
//Event module has on method with some callback function, to invoke module we use emit method.
var events=require('events');
var myEmitter=new events.EventEmitter();
myEmitter.on('someEvent',function(msg){

console.log(msg);
})


myEmitter.emit('someEvent','the event was emitted');
//Here myEmitter.on method has been invoked.


