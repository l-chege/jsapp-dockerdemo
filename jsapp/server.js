let express = require('express');
let path = require('path');
let fs = require('fs');
let app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture', function (req, res) {
    var img = fs.readFileSync('profile1.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});