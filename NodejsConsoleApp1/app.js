'use strict';

var uwp = require("uwp");
uwp.projectNamespace("Windows");

var appServiceConnection = new Windows.ApplicationModel.AppService.AppServiceConnection();

appServiceConnection.appServiceName = "";

appServiceConnection.packageFamilyName = "";

appServiceConnection.onrequestreceived = onRequestReceived; // this is the function to handle the request received from app service

appServiceConnection.openAsync().done(
        function () {
            console.log('connected to app service provider!');
        });

var message = new Windows.Foundation.Collections.ValueSet();
message.insert('Message', 'Hello!');   
appServiceConnection.sendMessageAsync(message).done(
                        function () {
                            console.log('Message Sent!');
                        });

var OWIRobotArm = require('owi-robot-arm');

var arm = new OWIRobotArm();

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