var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"wpn"
});

function query(sql,callback,addSqlParams){
    pool.getConnection(function(err,connection){
        connection.query(sql, addSqlParams, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

module.exports = query;