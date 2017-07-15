

module.exports = function(application) {

    application.get('/noticias', function(req, res){

      let connection = application.config.dbConnection();
      let modelNoticia = new application.app.models.NoticiasDAD(connection);

      modelNoticia.getNoticias(function(error, result){
        res.render('noticias/noticias', {noticias: result});
      });

    });

}
