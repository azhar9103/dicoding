'use strict';

const Hapi  = require('./node_modules/@hapi/hapi');
const Joi   = require('./node_modules/joi');
const MySQL = require('./node_modules/mysql');

// const server = new Hapi.server({
//     port: 9000,
//     host: 'localhost'
// });


const init = async () => {
    const connection = MySQL.createConnection({
        host: "103.131.51.11",
        user: "idwebtek_userBook",
        password: "password2022",
        database: "idwebtek_bookshelf"
    });

    const server = Hapi.server({
        port: 9000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/helloworld',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    //route get
    server.route({
    method: 'GET',
    path: '/data',
    handler: (request, reply) => {
        connection.query('SELECT * FROM book', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });
    }
});

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();