//Util modules helps to inherit objects

var events=require('events');
var util=require('util');
var Person=function(name){
this.name=name;
}
util.inherits(Person,events.EventEmitter);
var james=new Person('james');
var khairu=new Person('khairu');
var ryu=new Person('ryu');
var people=[james,khairu,ryu];
people.forEach(function(person){
person.on('speak',function(msg){

console.log(person.name+' said '+msg);
})
})

james.emit('speak','hello');
ryu.emit('speak','welcome');