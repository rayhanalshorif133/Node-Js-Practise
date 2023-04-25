const EventEmitter = require('events');

class School extends EventEmitter{
    startPeriod(){
        console.log("Class started");
        // raise event when bell rings
        setTimeout(() => {
            this.emit('bellRing', {
                period: '2nd',
                text: 'period ended'
            }); // Making a noise, emit an event
        }, 2000);
    }
}

module.exports = School;