var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) {responseCode = 200;}
    fs.readFile(__dirname + path, function(err, data) {
        if (err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("500 - Internal Error");
        }
        else {
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case '':
            serveStaticFile(res, "/index.html", "text/html");
            break;
        case '/about':
            serveStaticFile(res, '/about.html', 'text/html');
            break;
        case '/img/about.jpg':
            serveStaticFile(res, '/img/about.jpg', 'image/jpeg');
            break;
        case '/img/welcome.jpg':
            serveStaticFile(res, '/img/welcome.jpg', 'image/jpeg');
            break;
        case '/img/cry.jpg':
            serveStaticFile(res, '/img/cry.jpg', 'image/jpeg');
            break;
        case '/graduation':
            serveStaticFile(res, '/img/gallery/graduation.jpg', 'image/jpeg');
            break;
        case '/study':
            serveStaticFile(res, '/img/gallery/study.jpg', 'image/jpeg');
            break;
        case '/memes':
            serveStaticFile(res, '/video/students/memes.mp4', 'MPEG-4');
            break;
        case '/style.css':
            serveStaticFile(res, '/style.css', 'text/css');
            break;
        case '/script.js':
            serveStaticFile(res, '/script.js', 'text/js');
            break;
        default:
            serveStaticFile(res, '/error.html', 'text/html');
            break;
    }
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl+C to terminate");