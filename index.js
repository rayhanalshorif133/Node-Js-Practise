const School = require('./school');

// Register a listener for bellRing event

const school = new School();
school.startPeriod();

school.on('bellRing', ({period,text}) => {
    console.log(`We need to run because ${period} ${text}`);
});


