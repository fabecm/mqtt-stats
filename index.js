var mqtt = require('mqtt');

var projectName = undefined;

var init = function (name, conf) {
    var client = mqtt.connect('mqtt://' + conf.url);

    client.on('connect', function() {
        client.subscribe('presence', function () {
            client.publish('devices/', "true");
        });
    });

}

var express = function(req, res, time) {
    if (req.method === 'OPTIONS' && res.statusCode === 204) {
        return;
    }

    client.publish('devices/calls', "call");
}

module.exports = {
    init: init,
    express: express
};
