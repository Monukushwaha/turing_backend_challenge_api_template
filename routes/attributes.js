var sql = require('../config');

module.exports=function(router)
{
  
// Task 3.1

router.get('/attributes',function(req,res){

    sql.query('SELECT * FROM attribute ',(error,result) => {
        if (error) throw error;
        res.send(result);
    });
});

// Task 3.2

router.get('/attributes/:id',function(req,res){
    const id = req.params.id;
    sql.query('SELECT * FROM  attribute WHERE attribute_id=?',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});

// Task 3.3
router.get('/attributes/value/:id',function(req,res){
    const id =req.params.id;
    sql.query('SELECT * FROM attribute_value WHERE attribute_id=?',id,(error,result) => {
        if (error) throw error;
        res.send(result);
    });
});

// Task 3.4
router.get('/attributes/inProduct/:id',function(req,res){
    const id =req.params.id;
    sql.query('SELECT * FROM attribute_value WHERE attribute_id=?',id,(error,result) => {
        if (error) throw error;
        res.send(result);
    });
});

    
};
