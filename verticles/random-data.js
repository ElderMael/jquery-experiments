/**
 * Simple verticle to send a json object with random readings (simulating a Sensor Card).
 */

load('vertx.js')

var server = vertx.createHttpServer();

server.requestHandler(function (request) {

    if (request.path === '/' && request.params) {

        var response = request.response;

        response.putHeader('Content-type', 'application/json')
            .putHeader('Access-Control-Allow-Origin', '*');

        response.setChunked(true);

        var data = {
            'readings':[]
        };

        for (i = 0; i <= 10; i++) {
            data.readings[i] = Math.floor(Math.random() * 31) + 143; // Cards send data from 143 to 173
        }

        response.write(JSON.stringify(data));

        response.end();

    }

});

server.listen('8080', 'localhost');

