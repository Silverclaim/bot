var tmi = require("tmi.js");

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