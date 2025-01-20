const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


// Listeners are nothing, but they are just callback functions 
// They get executed whenever an event is emitted.

function listener1(data){
    console.log(data);
    console.log('listener1 called !');
}

function listener2(){
    console.log('listener2 called !');
}

function listener3(){
    console.log('listener3 called !');
}

// CB fn. gets executed, anytime a new listener is added to any event., the CB gets called with event attached with and the listener.
eventEmitter.on('newListener', (event, listener)=>{
    console.log(`${listener} added for the event - ${event}`);  
});


// .on() takes single function at a time. Adds the CB to listener array
eventEmitter.on('fire', listener1);
eventEmitter.on('fire', listener2);
eventEmitter.on('newFire', listener3);


// emits an event
eventEmitter.emit('fire');
eventEmitter.emit('fire', 123);  // additional arguments get passed as argument to all listeners.


// Returns array of listeners associated with 'fire' event
console.log('fire event listeners', eventEmitter.listeners('fire'));
console.log('newFire event listeners', eventEmitter.listeners('newFire'));


// removes Listener from listener array of 'fire'
eventEmitter.removeListener('fire', listener1);
eventEmitter.emit('fire');






