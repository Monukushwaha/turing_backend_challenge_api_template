var sql = require('../config');
module.exports=function(router){
    router.get('/products',function(req,res){
        sql.query('SELECT * FROM product',(error,result) =>{
            if (error) throw error;
            res.send(result)
        });
    });
}