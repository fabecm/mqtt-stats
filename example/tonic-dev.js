var mqttStats = require('mqtt-stats');

mqttStats.init("TestTonicDev", "mqtt://test.mosca.io/", {
    username: "beautifulUsername",
    password: "securePassword"
});

mqttStats.episode("NewTester", "FromTonicDev");
