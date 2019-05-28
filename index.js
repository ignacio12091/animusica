const express = require('express');
const app = express();
app.use(express.urlencoded());
app.listen(80);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/routes/mainPage/index.html');
});