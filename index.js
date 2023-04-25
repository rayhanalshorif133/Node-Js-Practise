const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener for bellRing event
emitter.on('bellRing', ({period,text}) => {
    console.log(`We need to run because ${period} ${text}`);
});

emitter.emit('bellRing',{
    period: '2nd',
    text: 'period ended'
}); // Making a noise, emit an event

