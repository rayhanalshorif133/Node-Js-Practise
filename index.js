const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener for bellRing event
emitter.on('bellRing', () => {
    console.log('Making a noise, emit an event');
});

emitter.emit('bellRing'); // Making a noise, emit an event

