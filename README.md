# mqtt-stats
MQTT Stats for Node.js

The goal of this lib is to simplify the creation of custom and lightweight stats/analytics for Node.js web apps.

One usage example of this lib is an internet connected Board with one Led for every node.js app, if the node application goes offline the relative led in the Board will go off. 

## Methods
######   **init**(_name_, _host_, _mqttObject_)

  **Params:**
  
    
    name: 
      
      Name of the Project
  
    host: 
      
      Host of MQTT broker (See MQTT.js)
  
    mqttObject: 
      
      Object of MQTT Client configuration. (See MQTT.js)


  **Description:**
  
    This method initialize the lib and subscribe the mqtt client to the topic "[PROJECT_NAME]/presence",
    In case of publish on "[PROJECT_NAME]/presence" the client will publish on "[PROJECT_NAME]"
  
######   **express**(_req_, _res_)

  **Use:**
    
    var stats = require("mqtt-stats");
    
    var app = express();
  
    app.use(stats.express);

  **Description:**
  
    This method will publish to "[PROJECT_NAME]/calls" every Express response
######   **episode**(_eventName_, _data_)

  **Params:**
      
    eventName: 
      
      The name of the Event
  
    data: 
    
      The payload of the publish

  **Description:**
  
    This method will publish to "[PROJECT_NAME]/episode/[EVENT_NAME]" on specific episodes (ex. A new login, new post, new user, ecc)
