var sql = require('../config');
module.exports=function(router){
    router.post('/customers',function(req,res){
        var users={
            "name":req.body.name,
            "email":req.body.email,
            "password":req.body.password
          }

        sql.query('INSERT INTO customer SET ? ',users,(error,result) => {
            if (error) throw error;
            res.status(201).send(result);
        });

    });
    router.get('/customers',function(req,res){
        sql.query('select * from customer ',(error,result) => {
            if (error) throw error;
            res.send(result);
        });

    });
}