var  mysql  = require('mysql');

var connMySQL = function() {

  console.log("Conexão estabelecida com bando de dados");
  
  return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'novembro',
        database: 'portal_noticias'
  });

}

module.exports = function() {

    console.log("Modulo DB importado");
    return connMySQL;

}
