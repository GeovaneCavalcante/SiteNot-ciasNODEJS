module.exports.admin = function(application, req, res) {

  res.render('admin/admin', {validacao: {}, noticia: {}});

}

module.exports.salvar_noticia = function(application, req, res) {

  let noticia = req.body;

  req.assert('titulo', 'Título Obrigatório').notEmpty();
  req.assert('resumo', 'Resumo Obrigatório').notEmpty();
  req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
  req.assert('autor', 'Autor Obrigatório').notEmpty();
  req.assert('data_hora', 'Data incorreta').notEmpty().isDate({format: 'YYYY-MM-DO'});
  req.assert('noticia', 'Noticia Obrigatório').notEmpty();

  let errors = req.validationErrors();

  if(errors){
    res.render('admin/admin', {validacao: errors, noticia: noticia});
    return;
  }

  let connection = application.config.dbConnection();
  let modelNoticia = new application.app.models.NoticiasDAD(connection);

  modelNoticia.salvarNoticia(noticia, function(error, result) {
    res.redirect('/noticias');
  });

}
