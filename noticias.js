var http = require('http');

http.createServer(function(req, res) {
  let categoria = req.url;

  if (categoria == '/tecnologia') {

      res.end("<html><body>noticias tecnologias</body></html>");

  }else if (categoria == '/moda') {

      res.end("<html><body>noticias modas</body></html>");

  }else if (categoria == '/beleza') {

     res.end("<html><body>noticias beleza</body></html>");

  }else{
    res.end("<html><body>Portal noticias</body></html>");
  }

}).listen(8080);
