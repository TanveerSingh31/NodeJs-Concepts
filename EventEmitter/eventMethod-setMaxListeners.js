const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

const listener1 = () => {
    console.log('listener1 executed!');
}

const listener2 = () => {
    console.log('listener1 executed!');
}

const listener3 = () => {
    console.log('listener1 executed!');
}

// sets max limit for listeners that can be attached to event.
eventEmitter.setMaxListeners(2);

eventEmitter.on('data', listener1);
eventEmitter.on('data', listener2);
eventEmitter.on('data', listener3); // error

