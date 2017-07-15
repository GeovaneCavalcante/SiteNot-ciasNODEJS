function NoticiasDAD(connection){
  this._connection = connection;
};

NoticiasDAD.prototype.getNoticias = function(callback) {
  this._connection.query("select * from noticias", callback);
};

NoticiasDAD.prototype.getNoticia = function(id, callback) {
  this._connection.query("select * from noticias where id = " + id.id, callback);
};

NoticiasDAD.prototype.salvarNoticia = function(noticia, callback) {
  this._connection.query("insert into noticias set ? ", noticia, callback);
};

NoticiasDAD.prototype.get5Ultimas = function(callback) {
  this._connection.query("select * from noticias order by data_hora desc limit 5", callback);
};

module.exports = function(){
  return NoticiasDAD;
};
