function NoticiasDAD(connection){
  this._connection = connection;
};

NoticiasDAD.prototype.getNoticias = function(callback) {
  this._connection.query("select * from noticias", callback);
};

NoticiasDAD.prototype.getNoticia = function(callback) {
  this._connection.query("select * from noticias where id = 2", callback);
};

NoticiasDAD.prototype.salvarNoticia = function(noticia, callback) {
  console.log(noticia);
  this._connection.query("insert into noticias set ? ", noticia, callback);
};

module.exports = function(){
  return NoticiasDAD;
}
