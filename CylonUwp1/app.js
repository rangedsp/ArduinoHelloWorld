// Before running this code, update serialport by right-clicking on the npm node 
// (in the Solution Explorer) and selecting 'Update npm Packages'
// Doing this will enable serialport to work with this application.

var Cylon = require('cylon');
console.log('got cylon');

var OWIRobotArm = require('owi-robot-arm');
console.log('got owi');

var arm = new OWIRobotArm();
console.log('init owi');

var actions = [];

//Give the robot a little workout.
//Queue up a bunch of actions.
actions.push(function () {
    arm.ledOn();
});
actions.push(function () {
    arm.ledOff();
});
actions.push(function () {
    arm.gripsOpen();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.gripsClose();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.wristUp();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.wristDown();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.elbowUp();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.elbowDown();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.shoulderUp();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.shoulderDown();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.baseClockwise();
});
actions.push(function () {
    arm.stop();
});
actions.push(function () {
    arm.baseCounterClockwise();
});
actions.push(function () {
    arm.stop();
});


Cylon.robot({
    connections: {
        // Use the serialport list function to get the port value for your connection. 
        // If a device ID is provided as the comName, be sure to double the backslashes 
        // in the string. e.g. \\?\ should be \\\\?\\
    },

    devices: {

    },

    work: function (my) {
        var i = 0;
        //execute em!
        var interval = setInterval(function () {
            if (i < actions.length) {
                actions[i]();
                i++;
            }
            else {
                clearInterval(interval);
                return;
            }
        }, 500);
    }
}).start();
