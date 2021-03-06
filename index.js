var mqtt = require('mqtt');
var _ = require('lodash');

var client = undefined;
var projectName = undefined;

var init = function(name, host, mqttObject) {
    if (!name || !host) {
        return;
    }

    projectName = name;

    client = mqtt.connect(host, mqttObject);

    client.on('connect', function() {
        client.subscribe(projectName + '/presence', function() {
            client.publish(projectName, "true");
        });
    });

}

var express = function(req, res, next) {
    if (req.method === 'OPTIONS' && res.statusCode === 204) {
        return;
    }

    client.publish(projectName + '/calls', JSON.stringify(req.method));

    if(next){
        next();
    }
}

var episode = function(eventName, data) {
    if (!eventName || eventName.length == 0) {
        eventName = "default";
    }

    if (JSON.stringify(data).length == 0) {
        data = "true";
    }

    client.publish(projectName + '/episode/' + eventName, JSON.stringify(data));
}

module.exports = {
    init: init,
    express: express,
    episode: episode
};
