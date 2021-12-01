var db = require('../db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');



getAllClothes = () => new Promise((resolve, reject) => {
    db.query('SELECT * from clothing', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});

module.exports = {
    getAllClothes
};