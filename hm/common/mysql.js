var mysql = require('mysql');
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"web07"
});
var query = function(mysql,values){
    // pool.getConnection(function(err, connection) {
    //     // Use the connection
    //     connection.query(mysql, values, function (error, results, fields) {
    //         // And done with the connection.
    //         connection.release();
    //
    //         // Handle error after the release.
    //         if (error) throw error;
    //
    //         // Don't use the connection here, it has been returned to the pool.
    //     });
    // });
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    connection.release();
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                })
            }
        })
    })
}
exports.db = query;