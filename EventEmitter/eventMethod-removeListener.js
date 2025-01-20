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

eventEmitter.on('removeListener', (event, listener) => {
    console.log(`${listener} removed from the event - ${event}`);
});

eventEmitter.once('data', listener1); // removeListener DOESNOT get triggered on this.

eventEmitter.on('data', listener2);
eventEmitter.on('data', listener3);

eventEmitter.removeListener('data', listener2);