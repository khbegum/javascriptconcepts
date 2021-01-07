//Event Emitter class has some methods :
//addListener(event,listener)
//on(event,listener)
//listenerCount(event)
//emit(event)//if listener has any parameters then while invoke we need to pass emit(event,parameters)
//removeListerner(event,Listerner);
//removeallListeners(event);
//setMaxListeners(n)(any number n)
//listerners(event)//to get all the listerners added

var events=require('events');
var eventEmitter=new events.EventEmitter;
var listener1=()=>{
    console.log("listener1 is executed");
}
var listener2=()=>{
    console.log("listener2 is executed");

}
var listener3=()=>{
    console.log("listener3 is executed");

}
//adding listerners to event (eventname,eventHandler(i.e,listener))
eventEmitter.addListener('connection',listener1);
//we can add multiple listeners of same name
eventEmitter.addListener('connection',listener1)
//binding the other listerner with the event
eventEmitter.on('connection',listener2);
eventEmitter.on('connection',listener3);
//we can bind multiple listerners of same name
eventEmitter.on('connection',listener2);
//listenerCount method is to know how many listerners are binded to a event
let listeners=eventEmitter.listenerCount('connection');
console.log("The No.of listeners of event connection are:"+listeners)
//to fire the event we use emit method of eventemitter class
eventEmitter.emit('connection');
//remove listener
eventEmitter.removeListener('connection',listener1);
eventEmitter.emit('connection');
let listeners1=eventEmitter.listenerCount('connection');
console.log("The No.of listeners of event connection are:"+listeners1)
eventEmitter.removeListener('connection',listener1);
eventEmitter.emit('connection');
let listeners2=eventEmitter.listenerCount('connection');
console.log("The No.of listeners of event connection are:"+listeners2);
eventEmitter.on('connection',listener3);

eventEmitter.emit('connection');
let listeners3=eventEmitter.listenerCount('connection');
console.log("The No.of listeners of event connection are:"+listeners3)

//to know what all evenhandlers/listeners are present in an event
console.log(eventEmitter.listeners('connection'));//count is 4
//to fix eventlisterners to maximum count
eventEmitter.setMaxListeners(5);
eventEmitter.on('connection',listener3);// count 5
//eventEmitter.on('connection',listener3);//count is 6 in this case we get error as it Maxlistenersexceeding
let listeners4=eventEmitter.listenerCount('connection');
console.log("The No.of listeners of event connection are:"+listeners4)
//to remove all listeners
eventEmitter.removeAllListeners('connection');
console.log(eventEmitter.listeners('connection'));
//once method in eventEmitterclass
//once the event is invoked ,the listerner will run for once and then it get deleted(removed)
eventEmitter.once('connection',listener3);
console.log(eventEmitter.listeners('connection'));
eventEmitter.emit('connection');
console.log(eventEmitter.listeners('connection'));


