process.env.TZ = "Asia/Jakarta";
// const path = require('path');
// const bodyParser = require('body-parser');
// const http = require('http').Server(app);

// const router = express.Router();
const http = require('http'); 



const db = require('./config.js');
const messages = []

function tahun() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let d = ("0" + date.getDate()).slice(-2);
    let m = ("0" + (date.getMonth() + 1)).slice(-2);
    let y = date.getFullYear();
    const jam = hours + ":" + minutes;
    const tanggal = y + "-" + m + "-" + d;
    return [jam, tanggal];
}





get('/messages', (req, res) => {
    res.send(messages);
})
