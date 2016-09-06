var tmi = require("tmi.js");
// var showConnectionNotices = true;

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "RevlisBot",
        password: "oauth:ndm02m61xtuhpi5l9wihhb1uxd5com"
    },
    channels: ["Silverclaim"]
};

var client = new tmi.client(options);
client.connect();

client.on("message", function(channel, user, message, self){
    if (message.match(/revlis/gi)) {
      client.say("Silverclaim", user['display-name'] + " -- What do you want from me?!");
    }
});

client.on("connected", function(address, port) {
    client.action("Silverclaim", "I have returned.");
});

client.on("join", function(channel, user, self) {
  client.action("Silverclaim", user + "~ I see you!");
});