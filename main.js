//string webhookurl
var webhookurl = "https://discordapp.com/api/webhooks/";


//send webhook
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