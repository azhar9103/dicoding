const mysql = require('mysql');

// idwebtekno.com
const db = exports.db = mysql.createConnection({
    host: "103.131.51.11",
    user: "idwebtek_userBook",
    password: "password2022",
    database: "idwebtek_bookshelf"
});

// exports.knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: "",
//         port: 3306,
//         user: "root",
//         password: "",
//         database: ""
//     }
// });


db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});