// const mysql = require('./node_modules/mysql');
const hapi      = require("@hapi/hapi")
const joi       = require('@hapi/joi');
const book      = require("./services")
const router    = new book();

const init = async()=>{
    const server= hapi.server({
        port:9000,
        host:'localhost'
    })

    server.route({
        method:'GET',
        path:'/getall',
        handler:router.getData   
    });

    await server.start();
    console.log("server running on",server.info.uri);
};

process.on('unhandledRejection',(err)=>{
    console.log(err);
})

init();