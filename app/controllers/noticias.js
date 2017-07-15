module.exports.noticias = function(application, req, res){

  let connection = application.config.dbConnection();
  let modelNoticia = new application.app.models.NoticiasDAD(connection);

  modelNoticia.getNoticias(function(error, result){
    res.render('noticias/noticias', {noticias: result});
  });
}

module.exports.noticia = function(application, req, res) {

  let connection = application.config.dbConnection();
  let noticiaModel = new application.app.models.NoticiasDAD(connection);
  let id = req.query;

  noticiaModel.getNoticia(id, function(error, result){
    res.render('noticias/noticia', {noticia: result});
  });
}
