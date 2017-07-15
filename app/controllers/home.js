module.exports.index = function(application, req, res) {

  let connection = application.config.dbConnection();
  let modelNoticia = new application.app.models.NoticiasDAD(connection);

  modelNoticia.get5Ultimas(function(error, result){
    res.render('home/index', {cinco: result});
  });

}
