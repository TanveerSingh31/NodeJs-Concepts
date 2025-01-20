const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

const listener1 = () => {
    console.log('listener1 executed!');
}


// .once() -> attaches the listener to event , only for 1 emit
// i.e The listener listens to event only once, after which it is removed from listener array
eventEmitter.once('data', listener1);

console.log(eventEmitter.listeners('data'));

// after emitting, the cb is removed from the listener array
eventEmitter.emit('data');

// empty array
console.log(eventEmitter.listeners('data'));

// no result
eventEmitter.emit('data');