var pgp = require('pg-promise')({
    // Initialization Options 
});
var connection = {
    host: 'localhost',
    port: 5432,
    database: 'gabe',
    user: 'autograder',
    password: 'auto'
};
var db = pgp(connection);


function readDatabase () {
 return db.any("SELECT topic FROM question WHERE id = $1", [3])
    .then(function (data) {
        // success;
        console.log(data)
        return data;
    })
    .catch(function (error) {
        // error;
        console.log(error);
    });
};

function dataManupulation () {
readDatabase()
  .then(function (data) {
    // success;
    var data = data[0].topic
    console.log(data)
    return data
  })
  .catch(function (error) {
    // error;
    console.log(error)
  })
}

console.log("PreTest \n")
dataManupulation()

setTimeout(function(){console.log("PostTest \n")}, 3000);