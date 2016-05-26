var mqtt = require('mqtt');

var client = undefined;
var projectName = undefined;

var init = function(name, host, mqttObject) {
    if (!name || !host) {
        return;
    }

    client = mqtt.connect(host, mqttObject);

    client.on('connect', function() {
        client.subscribe(projectName + '/presence', function() {
            client.publish(projectName, "true");
        });
    });

}

var express = function(req, res) {
    if (req.method === 'OPTIONS' && res.statusCode === 204) {
        return;
    }

    client.publish(projectName + '/calls', "true");
}

var episode = function(eventName, data) {
    if (!data) {
        data = "true";
    }

    client.publish(projectName + '/episode/' + eventName, "true");
}

module.exports = {
    init: init,
    express: express,
    episode: episode
};
