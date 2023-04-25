const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener for bellRing event
emitter.on('bellRing', (period) => {
    console.log(`We need to run because ${period}`);
});

emitter.emit('bellRing','2nd period ended'); // Making a noise, emit an event

