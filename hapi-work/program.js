// 'use strict';
//
// var Hapi = require('hapi');
// var server = new Hapi.Server({
//     host: 'localhost',
//     port: Number(process.argv[2] || 8080)
// });
//
// server.route({
//     path: '/',
//     method:'GET',
//     handler: function(request, reply) {
//       return reply("Hello hapi");
//     }
// });
//
// server.start((err) => {
//     console.log('Server running at:', server.info.uri);
// });


var Hapi = require('hapi');


var server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello hapi');
    }
});

server.start((err) => {
    if (err) throw err;
});
